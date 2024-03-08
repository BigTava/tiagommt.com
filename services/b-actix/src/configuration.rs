use config::{Config, File};

#[derive(serde::Deserialize)]
pub struct Settings {
    pub application_host: String,
    pub application_port: u16,
}

impl Settings {
}

pub fn get_configuration() -> Result<Settings, config::ConfigError> {
    match envy::from_env::<Settings>() {
        Ok(settings) => Ok(settings),
        Err(_) => {
            let builder = Config::builder()
                .add_source(File::with_name("./configuration"));
               
            let settings = builder.build()?.try_deserialize::<Settings>()?;
            Ok(settings)
        }
    }
}