package com.gothamfinancial.platform;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class GothamServiceTest {

    @Test
    void processTransactionReturnsApprovedMessage() {
        GothamService service = new GothamService();
        String result = service.processTransaction(100.00, "Wayne", "Gordon");
        assertTrue(result.startsWith("Transaction GCB-"));
        assertTrue(result.contains("$100.00"));
        assertTrue(result.contains("from Wayne to Gordon"));
        assertTrue(result.endsWith("Approved"));
    }

    @Test
    void processTransactionFormatsAmountCorrectly() {
        GothamService service = new GothamService();
        String result = service.processTransaction(49.99, "Drake", "Kyle");
        assertTrue(result.contains("$49.99"));
        assertTrue(result.contains("from Drake to Kyle"));
    }
}
