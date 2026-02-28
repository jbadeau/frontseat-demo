package dev.frontseat.library;

import dev.frontseat.common.Greeter;

public class FancyGreeter {

    public static final String VERSION = "0.2.0";

    private final Greeter greeter = new Greeter();

    public String greet(String name) {
        return "*** " + greeter.greet(name) + " ***";
    }
}
