#!/bin/sh
BRANCH_NAME=server
if grep -Fqe $BRANCH_NAME << EOF
`git show-branch --all`
EOF
then
    echo "$BRANCH_NAME exists"
   git checkout server
   git pull origin server
else
   git checkout -b server
   echo "$BRANCH_NAME not exists"
fi