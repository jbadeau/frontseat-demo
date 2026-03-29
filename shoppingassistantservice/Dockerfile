FROM python:3.12-slim

WORKDIR /app
COPY . .

EXPOSE 8080

ENTRYPOINT ["python", "-m flask run --host=0.0.0.0"]
