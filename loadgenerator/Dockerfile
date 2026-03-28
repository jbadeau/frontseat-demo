FROM python:3.12-slim

WORKDIR /app

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv
COPY pyproject.toml .
COPY *.py .
COPY templates/ templates/ 2>/dev/null || true
RUN uv sync --no-dev --frozen

EXPOSE 8089

ENTRYPOINT ["uv", "run", "-m locust"]
