# README

This application is a demonstration of how one could integrate Firebase's Realtime DB with an existing website.

# Getting Started
## Setup your Firebase Account
You must create a firebase project with the Realtime Database enabled and register a new web app. Use the credentials provided and set src/firebase/index.ts accordingly.

## Building the Docker Image

```
docker build -t firebase-comments:latest .
```

## Postgres DB

```
docker run -p 5432:5432 -e POSTGRES_PASSWORD=root -d postgres
```

## Start Rails Image

```
docker run -d -p 3000:3000 --env-file .env tronicboy/firebase-comments:pg
```

## Migrate DB

```
docker ps
docker exec -it <container-id-here> /bin/bash
rails db:migrate
```
