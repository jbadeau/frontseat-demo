package dev.frontseat.library;

import dev.frontseat.common.Greeter;

public class FancyGreeter {

    private final Greeter greeter = new Greeter();

    public String greet(String name) {
        return "*** " + greeter.greet(name) + " ***";
    }
}
