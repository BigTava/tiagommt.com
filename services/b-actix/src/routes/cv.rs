use std::path::PathBuf;

use actix_web::{get, HttpRequest, Result};
use actix_files::NamedFile;
use utoipa;




#[utoipa::path(
    responses(
        (status = 200, description = "CV file", content_type = "application/pdf"),
    ),
    tag = "CV",
)]
#[get("/cv")]
pub async fn get_cv(req: HttpRequest) -> Result<NamedFile> {
    let path: PathBuf = req.match_info().query("/app/static/CV_default.pdf").parse().unwrap();
     Ok(NamedFile::open(path)?)
}