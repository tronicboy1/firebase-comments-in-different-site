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

# Development mode
Running rails in Dev mode is easy with the following code.
```
docker run --rm -p 3000:3000 --env-file .env firebase-comments:latest rails server -e development -b 0.0.0.0
```

## Javascript Reloading
You can also reflect changes in javascript by adding a volume linked to your local project directory's public/js folder.
Ensure that you use the full path for your system's local folder.
```
docker run --rm -p 3000:3000 -v ~/Documents/practice/gcp-firebase-article/blog/public/js:/app/public/js --env-file .env firebase-comments:latest rails server -e development -b 0.0.0.0
```

Running yarn build and refreshing the page will reflect changes. Also consider adding webpack dev server!
