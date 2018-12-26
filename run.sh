#! /bin/bash
UI_NAME='dragon-ui'

docker build -t $UI_NAME .
docker stop $UI_NAME || true && docker rm $UI_NAME || true
docker run -d -v ~/.dragon-ui:/usr/src/app/.conf -p 8001:8001 --rm --name $UI_NAME $UI_NAME
