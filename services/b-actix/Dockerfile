FROM rust:latest

# Arguments
ARG SERVICE_PATH=services/b-actix/

# Set working directory
RUN mkdir -p /app
WORKDIR /app

# Install system dependencies
RUN apt-get update \
    && apt-get install -y musl-tools pkg-config libssl-dev \ 
    && rm -rf /var/lib/apt/lists/*

# Install rust dependecies
RUN cargo install cargo-watch

# Install app dependencies
COPY ${SERVICE_PATH} .
RUN cargo build --release

# Copy static
COPY static ./src

# Run entrypoint
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]