FROM gcr.io/distroless/static

WORKDIR /app

ARG ARTIFACT
COPY ${ARTIFACT} checkoutservice

EXPOSE 8080

ENTRYPOINT ["/app/checkoutservice"]
