package dev.frontseat.library;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class FancyGreeterTest {

    @Test
    void greetReturnsFancyMessage() {
        FancyGreeter greeter = new FancyGreeter();
        assertEquals("*** Hello, World! ***", greeter.greet("World"));
    }
}
