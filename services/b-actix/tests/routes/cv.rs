use crate::helpers::init_app;

#[tokio::test]
async fn test_cv_get_success() {
    let app = init_app().await;
    let address = app.address;

    let client = reqwest::Client::new();
    let response = client
        .get(&format!("{}/cv", &address))
        .send()
        .await
        .expect("Failed to execute request.");

    assert!(response.status().is_success());
    assert_eq!(Some(124183), response.content_length());
}