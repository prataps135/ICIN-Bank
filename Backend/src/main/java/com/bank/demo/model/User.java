package com.bank.demo.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	@NotNull
	private String name;
	
	@Column
	@NotNull
	private String username;
	
	@Column
	@NotNull
	private String password;
	
	@Column
	@NotNull
	private String email;
	
	@Column
	@NotNull
	private long contactNo;
	
	@OneToMany
	private List<Account> accounts;

	
	public User() {
		super();
	}

	
	public User(@NotNull String name, @NotNull String username, @NotNull String password, @NotNull String email,
			@NotNull long contactNo, List<Account> accounts) {
		super();
		this.name = name;
		this.username = username;
		this.password = password;
		this.email = email;
		this.contactNo = contactNo;
		this.accounts = accounts;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getContactNo() {
		return contactNo;
	}

	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}

	public int getId() {
		return id;
	}
	
	public List<Account> getAccounts() {
		return accounts;
	}

	public void setAccounts(List<Account> accounts) {
		this.accounts = accounts;
	}

	
	
	
	
}
