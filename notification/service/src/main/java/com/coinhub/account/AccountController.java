package com.coinhub.account;

import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private final Map<String, Account> accounts = new ConcurrentHashMap<>();
    private final AtomicInteger accountCounter = new AtomicInteger(0);

    public AccountController() {
        // Initialize with some sample accounts
        createAccount("user1", "checking", 5000.00);
        createAccount("user1", "savings", 10000.00);
        createAccount("user2", "checking", 3500.00);
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "healthy");
        response.put("service", "account-service");
        response.put("version", "1.0.0");
        return response;
    }

    @GetMapping
    public List<Account> getAllAccounts() {
        return new ArrayList<>(accounts.values());
    }

    @GetMapping("/{id}")
    public Account getAccount(@PathVariable String id) {
        Account account = accounts.get(id);
        if (account == null) {
            throw new RuntimeException("Account not found: " + id);
        }
        return account;
    }

    @GetMapping("/user/{userId}")
    public List<Account> getAccountsByUser(@PathVariable String userId) {
        List<Account> userAccounts = new ArrayList<>();
        for (Account account : accounts.values()) {
            if (account.getUserId().equals(userId)) {
                userAccounts.add(account);
            }
        }
        return userAccounts;
    }

    @PostMapping
    public Account createAccountForUser(@RequestBody Map<String, String> request) {
        String userId = request.get("userId");
        String accountType = request.getOrDefault("accountType", "checking");
        double initialBalance = Double.parseDouble(request.getOrDefault("initialBalance", "0.0"));
        return createAccount(userId, accountType, initialBalance);
    }

    private Account createAccount(String userId, String accountType, double initialBalance) {
        int accountNum = accountCounter.incrementAndGet();
        String accountNumber = String.format("ACC%06d", accountNum);
        String id = String.format("account_%d", accountNum);

        Account account = new Account(
            id,
            userId,
            accountNumber,
            accountType,
            initialBalance,
            "USD"
        );

        accounts.put(id, account);
        return account;
    }
}
