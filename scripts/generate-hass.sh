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

pushd frontend
git checkout dev
git pull
git fetch --tags
git checkout 20251105.1

bun yarn

popd

# Build HASS types
rm -rf ./src/hass

./node_modules/.bin/tsc frontend/src/**/* --declaration --emitDeclarationOnly --declarationDir ./src/hass

# This also generate types from a single file in frontend/hassio/src/hassio-my-redirect.ts, so we need to move the files around
mv ./src/hass/src/* ./src/hass/
rm -rf ./src/hass/hassio ./src/hass/src

# Build HASS utils
bun ./scripts/build-hass-utils.ts

echo "Done"
