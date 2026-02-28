fn main() {
    println!("rust-service {}", rust_library::VERSION);
    let greeting = rust_library::fancy_greet("World");
    println!("{}", greeting);
}
