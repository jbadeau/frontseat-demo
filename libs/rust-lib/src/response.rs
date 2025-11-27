use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ApiResponse<T> {
    pub success: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub message: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub data: Option<T>,
}

impl<T> ApiResponse<T> {
    pub fn success(data: T) -> Self {
        ApiResponse {
            success: true,
            message: None,
            data: Some(data),
        }
    }

    pub fn success_with_message(message: impl Into<String>, data: T) -> Self {
        ApiResponse {
            success: true,
            message: Some(message.into()),
            data: Some(data),
        }
    }

    pub fn error(message: impl Into<String>) -> Self {
        ApiResponse {
            success: false,
            message: Some(message.into()),
            data: None,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_success_response() {
        let response = ApiResponse::success("test data");
        assert!(response.success);
        assert_eq!(response.data, Some("test data"));
    }

    #[test]
    fn test_error_response() {
        let response: ApiResponse<String> = ApiResponse::error("Something went wrong");
        assert!(!response.success);
        assert_eq!(response.message, Some("Something went wrong".to_string()));
        assert!(response.data.is_none());
    }
}
