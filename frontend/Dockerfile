FROM gcr.io/distroless/static

WORKDIR /app

ARG ARTIFACT
COPY ${ARTIFACT} frontend

EXPOSE 8080

ENTRYPOINT ["/app/frontend"]
