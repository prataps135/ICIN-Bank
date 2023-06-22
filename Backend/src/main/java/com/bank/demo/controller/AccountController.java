package com.bank.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.demo.exception.AccountNotFoundException;
import com.bank.demo.model.Account;
import com.bank.demo.service.AccountService;

@RestController
@RequestMapping(value = "/api/v1/bank")
public class AccountController {

	@Autowired
	private AccountService accountService;

	@CrossOrigin
	@PutMapping(value = "/account/{id}")
	public ResponseEntity<Account> update(@PathVariable long id, @RequestBody long balance) throws Exception {
		Account account = accountService.updateAmount(id, balance);
		if (account == null) {
			throw new AccountNotFoundException();
		}
		return new ResponseEntity<>(account, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(value = "/account/{id}")
	public ResponseEntity<Account> getByAccountNumber(@PathVariable long id) throws Exception {
		Account account = accountService.getByAccountNumber(id);
		if (account == null) {
			throw new AccountNotFoundException();
		}
		return new ResponseEntity<>(account, HttpStatus.OK);
	}
}
