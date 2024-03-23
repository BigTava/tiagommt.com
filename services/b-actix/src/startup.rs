use std::net::TcpListener;

use actix_web::{web, App, HttpServer};
use actix_web::dev::Server;
use tracing_actix_web::TracingLogger;
use utoipa::{openapi, OpenApi, Modify, ToSchema};
use utoipa_swagger_ui::SwaggerUi;

use crate::routes::health_check;

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    #[derive(OpenApi)]
    #[openapi(paths(health_check::health_check))]
    struct ApiDoc;

    let server = HttpServer::new(move || {
        App::new()
            .wrap(TracingLogger::default())
            .route("/health_check", web::get().to(health_check))
    })
    .listen(listener)?
    .run();

    Ok(server)
}