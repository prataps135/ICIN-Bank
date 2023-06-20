package com.bank.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.demo.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer>{
	Admin findByUsername(String username);
//	Admin deleteByUsername(String username);
	Admin findById(int id);
}
