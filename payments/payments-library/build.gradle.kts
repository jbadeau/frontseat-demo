plugins {
    java
}

dependencies {
    implementation(project(":platform:gotham-java-platform:gotham-java-commons"))
    implementation("org.springframework.boot:spring-boot-starter:3.4.3")
    testImplementation("org.springframework.boot:spring-boot-starter-test:3.4.3")
}
