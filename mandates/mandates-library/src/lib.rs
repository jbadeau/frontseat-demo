pub const VERSION: &str = "0.2.0";

pub fn create_mandate(creditor: &str, debtor: &str, amount: f64) -> String {
    let validation = gotham_rust_commons::validate_mandate(creditor, debtor, amount);
    format!("[MandateCreated] {}", validation)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_create_mandate() {
        let result = create_mandate("Gotham Power Co", "Bruce Wayne", 250.0);
        assert!(result.starts_with("[MandateCreated] Mandate GCDD-"));
        assert!(result.contains("Gotham Power Co"));
        assert!(result.contains("Bruce Wayne"));
        assert!(result.contains("$250.00/month"));
    }
}
