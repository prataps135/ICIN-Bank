package com.bank.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.demo.model.Account;

public interface AccountRepo extends JpaRepository<Account, Long> {
	Account findById(long id);
}
