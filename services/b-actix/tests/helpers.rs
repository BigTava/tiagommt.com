use std::net::TcpListener;

use b_actix::configuration::get_configuration;
use b_actix::startup::run;



pub struct TestApp {
    pub address: String,
}

pub async fn init_app() -> TestApp {
    let listener: TcpListener = TcpListener::bind("127.0.0.1:0").expect("Failed to bind to random port");
    let port: u16 = listener.local_addr().unwrap().port();
    let address: String = format!("http://127.0.0.1:{}", port);

    let _ = get_configuration().expect("Failed to read configuration");

    let server = run(listener).expect("Failed to bind address");

    let _ = tokio::spawn(server);

    TestApp{address}
}
