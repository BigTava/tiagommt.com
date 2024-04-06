use std::path::PathBuf;

use actix_web::{get, Result};
use actix_files::NamedFile;
use utoipa;




#[utoipa::path(
    responses(
        (status = 200, description = "CV file", content_type = "application/pdf"),
    ),
    tag = "CV",
)]
#[get("/cv")]
pub async fn get_cv() -> Result<NamedFile> {
    let path: PathBuf = PathBuf::from("/app/static/CV_default.pdf");
    Ok(NamedFile::open(path)?)
}