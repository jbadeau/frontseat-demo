package dev.frontseat.service;

import dev.frontseat.library.FancyGreeter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private final FancyGreeter greeter = new FancyGreeter();

    @GetMapping("/version")
    public String version() {
        return "0.2.0";
    }

    @GetMapping("/greet")
    public String greet(@RequestParam(name = "name", defaultValue = "World") String name) {
        return greeter.greet(name);
    }
}
