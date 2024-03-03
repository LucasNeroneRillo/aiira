# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /django

# Install dependencies
COPY requirements.txt /django/
RUN pip install -r requirements.txt

# Copy project files
COPY . /django/

# Run gunicorn
CMD exec gunicorn --bind 0.0.0.0:8080 --workers 4 --threads 8 --timeout 0 main:app
