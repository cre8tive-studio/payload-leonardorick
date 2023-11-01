source ../../.env
dumpout=./tmp/mongodump
mediaout=./tmp/cloudinary
db=$MONGODB_DATABASE
echo "Migrating from staging to production..."
echo "Dumping/Downlaoding source database..."
mkdir -p $mediaout

mongodump --config mongodb-source-config.yaml --db $MONGODB_DATABASE --out $dumpout

# save media jsons inside temp cloudinary folder
media=$(bsondump $dumpout/$db/media.bson)
secure_urls=$(echo $media | jq | grep secure_url)
urls=$(echo $secure_urls | grep -o 'https://[^"]*')
for url in $urls
    do
    echo 'curling $filename...'
    filename=$(echo $url | grep -oE '[^/]*\.(jpg|png|gif|jpeg|svg|webp)')
    # save images to be uploaded on target cloudinary in python script
    curl $url --output $mediaout/$filename
done

# save media json on a file so we can read on python and update
# the values of secure_url and save a new bjson
echo "$media" > ./tmp/media.json
