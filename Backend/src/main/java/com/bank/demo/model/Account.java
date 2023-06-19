package com.bank.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

@Entity
public class Account {
	
	@Id
	private long number;
	
	@Column
	@NotNull
	private long balance;
	
	@ManyToOne
	private User user;

	public Account() {
		super();
	}

	public Account(long accountNumber, @NotNull long balance, @NotNull User user) {
		super();
		this.number = accountNumber;
		this.balance = balance;
		this.user = user;
	}

	public long getAccountNumber() {
		return number;
	}

	public void setAccountNumber(long accountNumber) {
		this.number = accountNumber;
	}

	public long getBalance() {
		return balance;
	}

	public void setBalance(long balance) {
		this.balance = balance;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	

}
