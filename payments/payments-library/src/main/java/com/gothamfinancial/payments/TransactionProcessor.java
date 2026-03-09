package com.gothamfinancial.payments;

import com.gothamfinancial.platform.GothamService;

public class TransactionProcessor {

    public static final String VERSION = "0.2.0";

    private final GothamService gothamService = new GothamService();

    public String process(double amount, String from, String to) {
        return "*** " + gothamService.processTransaction(amount, from, to) + " ***";
    }
}
