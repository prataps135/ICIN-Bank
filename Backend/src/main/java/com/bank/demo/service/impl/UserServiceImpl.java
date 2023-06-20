package com.bank.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.demo.model.User;
import com.bank.demo.repo.UserRepo;
import com.bank.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo userRepo;
	
	@Override
	public User addUser(User user) {		
		User newUser = userRepo.save(user);
		return newUser;
	}

	@Override
	public List<User> getAllUsers() {
		List<User> users = userRepo.findAll();
		return users;
	}

	@Override
	public User getByUsername(String username) {
		User user = userRepo.findByUsername(username);
		return user;
	}

}
