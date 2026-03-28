FROM gcr.io/distroless/static

WORKDIR /app

ARG ARTIFACT
COPY ${ARTIFACT} shippingservice

EXPOSE 8080

ENTRYPOINT ["/app/shippingservice"]
