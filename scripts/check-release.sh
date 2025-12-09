#!/bin/bash

git fetch --tags

release_version="v$(jq -r '.version' < package.json)"
release_exists="$(git tag --list $release_version)"

echo "releaseVersion=$release_version" >> $GITHUB_OUTPUT
echo "GITHUB_REF=$GITHUB_REF"

# If this is triggered from a PR, only release if the tag is an RC tag
if [[ $GITHUB_REF == refs/pull/*/merge ]]; then
    if [[ $release_version != *-rc.* ]]; then
        echo "Release $release_version is not an RC tag. Skipping release."
        echo "releaseExists=true" >> $GITHUB_OUTPUT
        exit 0
    fi
fi

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
