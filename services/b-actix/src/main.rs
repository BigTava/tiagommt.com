use std::net::TcpListener;

use anyhow::{Error, Result};

use b_actix::startup::run;
use b_actix::configuration::get_configuration;

#[tokio::main]
async fn main() -> Result<(), anyhow::Error> {
    dotenv::dotenv().ok();
    let configuration = get_configuration().expect("Failed to load configuration");

    let address = format!(
        "{}:{}",
        configuration.application_host, configuration.application_port
    );
    let listener = TcpListener::bind(address).expect("Failed to bind");
    match run(listener)?.await {
        Ok(_) => Ok(()),
        Err(e) => Err(Error::from(e)),
    }
}