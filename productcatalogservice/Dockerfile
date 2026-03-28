FROM gcr.io/distroless/static

WORKDIR /app

ARG ARTIFACT
COPY ${ARTIFACT} productcatalogservice

EXPOSE 8080

ENTRYPOINT ["/app/productcatalogservice"]
