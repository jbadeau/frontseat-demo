# Runtime stage - use distroless for minimal attack surface
# Binary is pre-built by frontseat compile phase (output to bin/)
FROM gcr.io/distroless/static-debian12:nonroot
COPY bin/auth-service /auth-service
EXPOSE 8080
ENTRYPOINT ["/auth-service"]
