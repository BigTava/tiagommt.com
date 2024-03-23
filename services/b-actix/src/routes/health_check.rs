use actix_web::{get, HttpResponse};
use utoipa;

#[utoipa::path(
    responses(
        (status = 200, description = "", body = HelthCheckResponse),
    ),
    tag = "System",
)]
#[get("/health_check")]
pub async fn get_health_check() -> HttpResponse {
    HttpResponse::Ok().finish()
}