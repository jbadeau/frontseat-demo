fn main() {
    println!("mandates-service {}", mandates_library::VERSION);
    let mandate = mandates_library::create_mandate("Gotham Power Co", "Bruce Wayne", 250.0);
    println!("{}", mandate);
}
