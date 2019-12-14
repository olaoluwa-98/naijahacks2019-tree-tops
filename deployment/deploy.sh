#!/bin/bash

if [ "$1" == "" ]; then
    DOCKER_FILE="docker-compose.yml"
else
    DOCKER_FILE="docker-compose.$1.yml"
fi

docker-compose -f $DOCKER_FILE up --build -d
docker exec -it treetops-backend node ace migration:run --force