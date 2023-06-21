package com.bank.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.demo.model.User;
import com.bank.demo.repo.UserRepo;
import com.bank.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService {

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

	@Override
	public User deleteUser(int id) {
		User user = userRepo.findById(id);
		if (user != null) {
			userRepo.delete(user);
			return user;
		}
		return null;
	}

	@Override
	public User getById(int id) {
		User user = userRepo.findById(id);
		if (user != null) {
			return user;
		}
		return null;
	}

	@Override
	public User updateUser(int id, User user) {
		User existingUser = userRepo.findById(id);
		if (existingUser != null) {
			existingUser.setName(user.getName());
			existingUser.setUsername(user.getUsername());
			existingUser.setPassword(user.getPassword());
			existingUser.setEmail(user.getEmail());
			existingUser.setAccount(user.getAccount());
			User updatedUser = userRepo.save(existingUser);
			return updatedUser;
		}
		return null;
	}


}
