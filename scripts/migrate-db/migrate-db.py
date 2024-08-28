import subprocess
import json
import os
import cloudinary
import cloudinary.uploader

from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.collection import Collection


def popen(cmd: str):
    process = subprocess.Popen(cmd, shell=True)
    _stdout, stderr = process.communicate()

    if process.returncode != 0:
        print(f'Error: {stderr}')
        exit(1)
    print('Source database downlaoded successfully')
    return True


def fix_media_metadata(media_collection: Collection):
    media_metadata = []
    with open('tmp/media.json', 'r') as media:
        for line in media:
            media_metadata.append(json.loads(line))

    for j in media_metadata:
        secure_url = j['cloudinary']['secure_url']
        filename = secure_url.split('/')[-1]
        res = cloudinary.uploader.upload(
            f'./tmp/cloudinary/{filename}',
            folder=os.getenv('CLOUDINARY_FOLDER'),
            use_filename=True,
        )

        media_collection.update_one(
            {'cloudinary.secure_url': secure_url},
            {
                '$set': {
                    'cloudinary': {
                        'secure_url': res['secure_url'],
                        'original_filename': res['original_filename'],
                        'public_id': res['public_id'],
                    }
                }
            },
        )


def main():
    load_dotenv()
    cloudinary.config(
        cloud_name=os.getenv('CLOUDINARY_TARGET_CLOUD_NAME'),
        api_key=os.getenv('CLOUDINARY_TARGET_API_KEY'),
        api_secret=os.getenv('CLOUDINARY_TARGET_API_SECRET'),
        secure=True,
    )
    client = MongoClient(os.getenv('MONGODB_TARGET_URI'))
    media_collection = client[os.getenv('MONGODB_DATABASE')]['media']

    popen('./download-source-db.sh')
    popen('./upload-target-db.sh')

    fix_media_metadata(media_collection)
    print('script ended and information from source should now be available on target database')


if __name__ == '__main__':
    main()
