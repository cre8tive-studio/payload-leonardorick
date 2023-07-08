# we asume thae the following paths exists and you're working on some sort of workspace
# where your root frontend folder is on the same level of this payload repo

# this script should only be used by package.json command: generate:types-frontend

HERE=$(realpath $(dirname $0))
PARENT=$(dirname $HERE)
GRANDPARNET=$(dirname $PARENT)
# echo GRAANDPARENT: $GRANDPARNET
mv $PARENT/src/payload-types.ts $GRANDPARNET/frontend/types/payload-types.ts
