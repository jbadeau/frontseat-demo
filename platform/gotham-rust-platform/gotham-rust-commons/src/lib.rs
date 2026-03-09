pub const VERSION: &str = "0.2.0";

pub fn validate_mandate(creditor: &str, debtor: &str, amount: f64) -> String {
    let id = format!(
        "{:04X}",
        creditor.len().wrapping_mul(31) ^ debtor.len().wrapping_mul(17) ^ (amount as usize)
    );
    format!(
        "Mandate GCDD-{}: {} authorized to debit {} ${:.2}/month",
        id, creditor, debtor, amount
    )
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_validate_mandate() {
        let result = validate_mandate("Gotham Power Co", "Bruce Wayne", 250.0);
        assert!(result.starts_with("Mandate GCDD-"));
        assert!(result.contains("Gotham Power Co"));
        assert!(result.contains("Bruce Wayne"));
        assert!(result.contains("$250.00/month"));
    }

    #[test]
    fn test_validate_mandate_format() {
        let result = validate_mandate("Acme Corp", "Clark Kent", 99.99);
        assert!(result.contains("authorized to debit"));
    }
}
