@echo off

pushd .\
node ./src/index.js --port 8080 --path ../Release/out/packages
popd