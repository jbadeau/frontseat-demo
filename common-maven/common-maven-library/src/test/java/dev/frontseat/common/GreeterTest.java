package dev.frontseat.common;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class GreeterTest {

    @Test
    void greetReturnsExpectedMessage() {
        Greeter greeter = new Greeter();
        assertEquals("Hello, World!", greeter.greet("World"));
    }

    @Test
    void greetHandlesEmptyName() {
        Greeter greeter = new Greeter();
        assertEquals("Hello, !", greeter.greet(""));
    }
}
