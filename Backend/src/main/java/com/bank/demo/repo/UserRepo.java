package com.bank.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.demo.model.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	User findByUsername(String username);
}
