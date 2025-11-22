#!/bin/bash

# A Script to generate the types from https://github.com/home-assistant/frontend.git
# Declaration files are needed to avoid compilation errors on our side since
# TS does not allow suppressing errors in .ts files (only in .d.ts files)

# Get variables from ./.env
source ./.env

# Check if `frontend` is cloned
if [ ! -d "frontend" ]; then
    git clone https://github.com/home-assistant/frontend.git
fi

cd frontend
git checkout dev
git pull
git fetch --tags
git checkout 20250926.0

bun yarn

rm -rf ../src/hass-types

./node_modules/.bin/tsc src/**/* --declaration --emitDeclarationOnly --declarationDir ../src/hass-types

# # This also generate types from a single file in frontend/hassio/src/hassio-my-redirect.ts, so we need to move the files around
mv ../src/hass-types/src/* ../src/hass-types/
rm -rf ../src/hass-types/hassio ../src/hass-types/src

echo "Done"
