#!/bin/bash

# Get variables from ./.env
source ./.env

if [ -z "$SSH_HOST" ]; then
    echo "SSH_HOST is not set"
    exit 1
fi

if [ -z "$SSH_HA_PATH" ]; then
    echo "SSH_HA_PATH is not set"
    exit 1
fi

# Copy dist/go-hass-cards.js to SSH_HA_PATH
scp ./dist/go-hass-cards.js $SSH_HOST:$SSH_HA_PATH/config/www/

echo "Done"