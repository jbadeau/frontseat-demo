package com.gothamfinancial.payments.service;

import com.gothamfinancial.payments.TransactionProcessor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentController {

    private final TransactionProcessor processor = new TransactionProcessor();

    @GetMapping("/version")
    public String version() {
        return "0.2.0";
    }

    @GetMapping("/payment")
    public String payment(
            @RequestParam(name = "amount", defaultValue = "100.00") double amount,
            @RequestParam(name = "from", defaultValue = "Wayne") String from,
            @RequestParam(name = "to", defaultValue = "Gordon") String to) {
        return processor.process(amount, from, to);
    }
}
