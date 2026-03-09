package com.gothamfinancial.payments.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class PaymentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void paymentReturnsDefaultTransaction() throws Exception {
        mockMvc.perform(get("/payment"))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("$100.00")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("from Wayne to Gordon")));
    }

    @Test
    void paymentReturnsCustomTransaction() throws Exception {
        mockMvc.perform(get("/payment")
                        .param("amount", "500.00")
                        .param("from", "Drake")
                        .param("to", "Kyle"))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("$500.00")))
                .andExpect(content().string(org.hamcrest.Matchers.containsString("from Drake to Kyle")));
    }
}
