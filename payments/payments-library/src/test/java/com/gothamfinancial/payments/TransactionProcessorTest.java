package com.gothamfinancial.payments;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class TransactionProcessorTest {

    @Test
    void processReturnsWrappedTransaction() {
        TransactionProcessor processor = new TransactionProcessor();
        String result = processor.process(250.00, "Wayne", "Gordon");
        assertTrue(result.startsWith("*** Transaction GCB-"));
        assertTrue(result.contains("$250.00"));
        assertTrue(result.contains("from Wayne to Gordon"));
        assertTrue(result.endsWith("Approved ***"));
    }
}
