# Runtime stage - use distroless Java for minimal attack surface
# JAR is pre-built by frontseat compile phase
FROM gcr.io/distroless/java21-debian12:nonroot
COPY target/*.jar /app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
