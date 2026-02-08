pub fn fancy_greet(name: &str) -> String {
    format!("*** {} ***", common_rust_library::greet(name))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_fancy_greet() {
        assert_eq!(fancy_greet("World"), "*** Hello, World! ***");
    }
}
