package com.bank.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bank.demo.model.User;

@Component
public interface UserService {
	User addUser(User user);
	List<User> getAllUsers();
	User getByUsername(String username);
}
