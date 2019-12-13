#!/bin/bash

if [ "$1" == "production" ]; then
    DOCKER_FILE="docker-compose.$1.yml"
elif [ "$1" == "staging" ]
then
    DOCKER_FILE="docker-compose.$1.yml"
else
    # Local
    DOCKER_FILE="docker-compose.yml"
fi

# export $(grep -v '^#' .env | xargs -d '\n')
docker-compose -f $DOCKER_FILE up --build -d
docker exec -it treetops-backend node ace migration:run --force
# docker-compose restart