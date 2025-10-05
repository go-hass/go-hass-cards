#!/bin/bash

git fetch --tags

release_version="v$(jq -r '.version' < package.json)"
release_exists="$(git tag --list $release_version)"

echo "releaseVersion=$release_version" >> $GITHUB_OUTPUT

if [ -z "$release_exists" ]; then
    echo "Release $release_version does not exist. Creating it..."
    echo "releaseExists=false" >> $GITHUB_OUTPUT
else
    echo "Release $release_version exists"
    echo "releaseExists=true" >> $GITHUB_OUTPUT
fi

if [[ $release_version == *-rc.* ]]; then
    echo "prerelease=true" >> $GITHUB_OUTPUT
    echo "latest=false" >> $GITHUB_OUTPUT
else
    echo "prerelease=false" >> $GITHUB_OUTPUT
    echo "latest=true" >> $GITHUB_OUTPUT
fi
