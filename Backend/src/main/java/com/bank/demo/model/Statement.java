package com.bank.demo.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class Statement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	@NotNull
	private long accountNumber;

	@Column
	@NotNull
	private Date date;
	
	@Column
	@NotNull
	private String details;
	
	@Column
	private long debit;
	
	@Column
	private long credit;
	
	@Column
	@NotNull
	private long balance;

	public Statement() {
		super();
	}

	public Statement(@NotNull long accountNumber, @NotNull Date date, @NotNull String details, long debit, long credit,
			@NotNull long balance) {
		super();
		this.accountNumber = accountNumber;
		this.date = date;
		this.details = details;
		this.debit = debit;
		this.credit = credit;
		this.balance = balance;
	}

	public long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public long getDebit() {
		return debit;
	}

	public void setDebit(long debit) {
		this.debit = debit;
	}

	public long getCredit() {
		return credit;
	}

	public void setCredit(long credit) {
		this.credit = credit;
	}

	public long getBalance() {
		return balance;
	}

	public void setBalance(long balance) {
		this.balance = balance;
	}

	public int getId() {
		return id;
	}

}
