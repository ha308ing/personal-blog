+++
title = 'Docker Intro'
date = 2024-02-28T17:54:46+04:00
draft = false
tags = ["docker"]
showTableOfContents = true
+++

## Create image

create `dockerfile`:

```docker
# FROM which image to create
FROM ubuntu:latest

# RUN commands when building
RUN apt update && apt install -y nodejs && apt install -y npm
RUN mkdir /home/package

# EXPOSE port for port-forwarding outside container (just declare use -p out:in run parameter)
EXPOSE 3000

# set WORKDIR (commands run relative to this path)
WORKDIR /home/package

# COPY from host to image (to workdir)
COPY ./index.js index.js

# run command after build
CMD node index.js
```

## Build image

```docker
# -t - title of the image
# pass path to dir with dockerfile
docker build -t package .
```

## Run image

```docker
# -v - mount host dir to the image dir (use absolute paths)
# -p - forward port from the image <host>:<image>
# -d - run in a background
# pass name of the image

docker run \
  -v /home/user/code/package/shared:/home/package/shared \
  -p 4000:3000 \
  -d \
  package
```

## List running images

`docker ps`

## Stop running image

```docker
# -t - timeout to stop
# pass container id (found with docker ps also shown after docker started)
docker stop -t 0 package
```
