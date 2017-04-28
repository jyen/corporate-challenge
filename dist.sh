#!/bin/bash
# My first script

echo "Clean up dist"
rm -fr dist

mkdir dist
mkdir dist/client

cd ui
ng build -prod

cd ../server
gulp build

cd ..

echo "Copying server"
cp -r server/dist/server dist

cp package.json dist

echo "Copying client"
cp ui/dist/* dist/client

#cd dist
#git init
#git remote add origin https://yenja01@richardson-cc.scm.azurewebsites.net:443/richardson-cc.git
#git add .
#git commit -s -a -m 'test'
#git push -f origin HEAD:master

