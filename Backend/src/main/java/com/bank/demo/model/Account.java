package com.bank.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;

@Entity
public class Account {

	@Id
	private long number;

	@Column
	@NotNull
	private String type;

	@Column
	@NotNull
	private long balance;

	public Account() {
		super();
	}

	public Account(long accountNumber, @NotNull long balance, String type) {
		super();
		this.number = accountNumber;
		this.balance = balance;
		this.type = type;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}

}
