package com.bank.demo.service;

import org.springframework.stereotype.Component;

import com.bank.demo.model.Account;

@Component
public interface AccountService {
	Account updateAmount(long acNumber, long amount);
}
