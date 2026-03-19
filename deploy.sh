#!/bin/bash

### CONFIG ###
SERVER_IP="13.201.43.237"
SERVER_USER="ubuntu"
KEY_PATH="~/Downloads/ennovatorz.pem"
REMOTE_PATH="/home/ubuntu/free4857"
APP_NAME="ennovatorz"

echo "===== BUILDING NEXTJS ====="
npm run build

echo "===== CREATING ZIP ====="
rm -f build.zip
zip -r build.zip .next public package.json package-lock.json next.config.js

echo "===== UPLOADING TO AWS ====="
scp -i $KEY_PATH build.zip $SERVER_USER@$SERVER_IP:/home/ubuntu/

echo "===== DEPLOYING ON SERVER ====="
ssh -i $KEY_PATH $SERVER_USER@$SERVER_IP << EOF

echo "Removing old build..."
rm -rf $REMOTE_PATH/.next
rm -rf $REMOTE_PATH/public
rm -f $REMOTE_PATH/package.json

mkdir -p $REMOTE_PATH
mv /home/ubuntu/build.zip $REMOTE_PATH/

cd $REMOTE_PATH

echo "Extracting..."
unzip -o build.zip

echo "Installing deps..."
npm install --omit=dev

echo "Restart PM2..."
pm2 delete $APP_NAME || true
pm2 start npm --name "$APP_NAME" -- start
pm2 save

echo "Done"

EOF

echo "===== DEPLOY COMPLETE ====="
