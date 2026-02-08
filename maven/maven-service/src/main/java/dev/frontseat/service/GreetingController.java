package dev.frontseat.service;

import dev.frontseat.library.FancyGreeter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private final FancyGreeter greeter = new FancyGreeter();

    @GetMapping("/greet")
    public String greet(@RequestParam(name = "name", defaultValue = "World") String name) {
        return greeter.greet(name);
    }
}
