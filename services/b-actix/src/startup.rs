use std::net::TcpListener;
use actix_web::{web, App, HttpServer};
use actix_web::dev::Server;
use crate::routes::health_check;
use tracing_actix_web::TracingLogger;

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    let server = HttpServer::new(move || {
        App::new()
            .wrap(TracingLogger::default())
            .route("/health_check", web::get().to(health_check))
    })
    .listen(listener)?
    .run();

    Ok(server)
}