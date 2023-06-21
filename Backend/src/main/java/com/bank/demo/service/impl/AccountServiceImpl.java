package com.bank.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.demo.model.Account;
import com.bank.demo.repo.AccountRepo;
import com.bank.demo.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {

	@Autowired
	private AccountRepo accountRepo;

	@Override
	public Account updateAmount(long acNumber, long amount) {
		Account account = accountRepo.findById(acNumber);
		if (account != null) {
			account.setBalance(amount);
			Account updatedAccount = accountRepo.save(account);
			return updatedAccount;
		}
		return null;
	}

}
