use std::net::TcpListener;

use actix_web::{App, HttpServer};
use actix_web::dev::Server;
use tracing_actix_web::TracingLogger;
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;

use crate::routes::{get_health_check, get_cv, *};
use crate::schemas::HelthCheckResponse;

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    #[derive(OpenApi)]
    #[openapi(paths(get_health_check, get_cv), components(schemas(HelthCheckResponse)))]
    struct ApiDoc;
    
    let openapi = ApiDoc::openapi();
    let server = HttpServer::new(move || {
        App::new()
            .service(SwaggerUi::new("/docs/{_:.*}").url("/api-docs/openapi.json", openapi.clone(),))
            .wrap(TracingLogger::default())
            .service(get_health_check)
            .service(get_cv)
    })
    .listen(listener)?
    .run();

    Ok(server)
}