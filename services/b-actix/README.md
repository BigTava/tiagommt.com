# Actix API Service

## Getting started

- Copy [configuration.example.yaml](configuration.example.yaml) to `configuration.yaml`#

- Edit `application_host`, `application_port`

### Run

```bash
cargo run
```

## Development

### Run in watch mode

```bash
cargo watch -q -c -w src/ -x run
```

### Run tests in specific module

```bash
cargo test --test main test_health_check
```

### Swagger API

http://localhost:8000/docs
