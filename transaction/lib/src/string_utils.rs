pub fn is_blank(s: &str) -> bool {
    s.trim().is_empty()
}

pub fn is_not_blank(s: &str) -> bool {
    !is_blank(s)
}

pub fn trim_to_empty(s: Option<&str>) -> String {
    s.map(|s| s.trim().to_string()).unwrap_or_default()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_is_blank() {
        assert!(is_blank(""));
        assert!(is_blank("   "));
        assert!(!is_blank("hello"));
    }

    #[test]
    fn test_is_not_blank() {
        assert!(!is_not_blank(""));
        assert!(is_not_blank("hello"));
    }

    #[test]
    fn test_trim_to_empty() {
        assert_eq!(trim_to_empty(None), "");
        assert_eq!(trim_to_empty(Some("  hello  ")), "hello");
    }
}
