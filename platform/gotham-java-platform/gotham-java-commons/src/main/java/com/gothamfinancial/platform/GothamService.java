package com.gothamfinancial.platform;

import java.util.UUID;

public class GothamService {

    public static final String VERSION = "0.2.0";

    public String processTransaction(double amount, String from, String to) {
        String id = UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        return "Transaction GCB-" + id + ": $" + String.format("%.2f", amount) + " from " + from + " to " + to + " — Approved";
    }
}
