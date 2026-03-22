pluginManagement {
    repositories {
        gradlePluginPortal()
        mavenCentral()
    }
}

rootProject.name = "gotham-financial"

include("platform:gotham-java-platform:gotham-java-commons")
include("payments:payments-library")
include("payments:payments-service")
