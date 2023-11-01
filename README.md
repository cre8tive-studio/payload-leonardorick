# leonardorick

Payload CMS for Leonardo Rick portifolio website

This project was created using create-payload-app using the blog template.

## How to Use

`yarn dev` will start up your application and reload on any changes.

### Docker

If you have docker and docker-compose installed, you can run `docker-compose up`

To build the docker image, run `docker build -t my-tag .`

Ensure you are passing all needed environment variables when starting up your container via `--env-file` or setting them with your deployment.

The 3 typical env vars will be `MONGODB_URI`, `PAYLOAD_SECRET`, and `PAYLOAD_CONFIG_PATH`

`docker run --env-file .env -p 4000:4000 my-tag`

#### Run migrate-db

enter folder `scripts/migrate-db`

run `python migrate-db.py`

This script is intented to automate the process of getting data from a mongodb database an insert into another one

The script consists in three steps:

1. Download the hole database from mongodb source cluster
2. Upload the hole data into mongodb target cluster
3. Upload medias from source cluster on the target cloudinary endpoint
4. Update media metadata on target cluster

The script assumes you:

1. Have python installed
2. Have properly settle `.env` and `mongodb-[source|target]-config.yaml`
3. Have a `media` collection on both mongo databases
4. Downloaded all script and system dependencies listed below
5. The script is currently settle for images but probabaly could easily work with other `filetypes` as well

The script has the following python dependencies:

4. `cloudinary`
5. `python-env`
6. `pymongo`

The script has the following brew (system) dependencies

1. `mongodb-database-tools` (usually available when installing mongoDB Server, try `brew list | grep mongodb-database-tools` to see if its available)
2. `jq` (for parsing jsons)
