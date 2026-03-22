plugins {
    java
    id("org.springframework.boot") version "3.4.3" apply false
}

allprojects {
    group = "com.gothamfinancial"
    version = "0.0.0"

    repositories {
        mavenCentral()
    }
}

subprojects {
    apply(plugin = "java")

    java {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    tasks.withType<Test> {
        useJUnitPlatform()
    }
}
