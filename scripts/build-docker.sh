DOCKERFILE_PATH=${DOCKERFILE_PATH:-"./"}

docker build -t chat-api-gateway:latest \
 --no-cache \
 --target=run \
  ${DOCKERFILE_PATH}