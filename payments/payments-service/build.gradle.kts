plugins {
    java
    id("org.springframework.boot")
}

dependencies {
    implementation(project(":payments:payments-library"))
    implementation("org.springframework.boot:spring-boot-starter-web:3.4.3")
    testImplementation("org.springframework.boot:spring-boot-starter-test:3.4.3")
}
