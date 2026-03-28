FROM alpine:3.19

WORKDIR /app

ARG ARTIFACT
COPY ${ARTIFACT} partners-service

EXPOSE 8080

ENTRYPOINT ["./partners-service"]
