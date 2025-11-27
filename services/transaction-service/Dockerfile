# Runtime stage - use distroless for minimal attack surface
# Binary is pre-built by frontseat compile phase (output to bin/)
FROM gcr.io/distroless/static-debian12:nonroot
COPY bin/transaction-service /transaction-service
EXPOSE 8080
ENTRYPOINT ["/transaction-service"]
