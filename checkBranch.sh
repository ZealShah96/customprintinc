#!/bin/sh
BRANCH_NAME=server
if grep -Fqe $BRANCH_NAME << EOF
`git show-branch --all`
EOF
then
   echo "$BRANCH_NAME exists"
   git checkout server
   git pull origin server
   git add .
   git commit -m "Commit Public folder"
   git push origin server
   echo "$BRANCH_NAME exists and public commit"
else
   echo "$BRANCH_NAME not exists"
   git checkout -b server
   git pull origin server
   git add .
   git commit -m "Commit Public folder"
   git push origin server
   echo "$BRANCH_NAME not exists and public commit"
fi