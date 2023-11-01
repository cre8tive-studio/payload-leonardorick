source ../../.env

echo "Restoring/Uploading target database..."
mongorestore --config mongodb-target-config.yaml --drop ./tmp/mongodump
