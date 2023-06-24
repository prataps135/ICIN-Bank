package com.bank.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class ChequeBook {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	@NotNull
	private long accountNumber;
	
	@Column
	@NotNull
	private int leafSize;
	
	@Column
	@NotNull
	private String status;

	public ChequeBook() {
		super();
	}

	public ChequeBook(@NotNull long accountNumber, @NotNull int leafSize,@NotNull String status) {
		super();
		this.accountNumber = accountNumber;
		this.leafSize = leafSize;
		this.status = status;
	}

	public long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public int getLeafSize() {
		return leafSize;
	}

	public void setLeafSize(int leafSize) {
		this.leafSize = leafSize;
	}

	public int getId() {
		return id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "ChequeBook [id=" + id + ", accountNumber=" + accountNumber + ", leafSize=" + leafSize + ", status="
				+ status + "]";
	}

	
	
}
