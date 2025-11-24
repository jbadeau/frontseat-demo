use axum::{
    extract::Json,
    routing::{get, post},
    Router,
};
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;

#[derive(Debug, Serialize, Deserialize)]
struct Notification {
    user_id: String,
    message: String,
    channel: String,
}

#[derive(Debug, Serialize)]
struct StatusResponse {
    status: String,
    service: String,
}

async fn health() -> Json<StatusResponse> {
    Json(StatusResponse {
        status: "healthy".to_string(),
        service: "notification-service".to_string(),
    })
}

async fn send_notification(Json(notification): Json<Notification>) -> Json<StatusResponse> {
    println!(
        "Sending notification to {} via {}: {}",
        notification.user_id, notification.channel, notification.message
    );

    Json(StatusResponse {
        status: "sent".to_string(),
        service: "notification-service".to_string(),
    })
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/health", get(health))
        .route("/notify", post(send_notification));

    let addr = SocketAddr::from(([0, 0, 0, 0], 3003));
    println!("Notification service listening on {}", addr);

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
