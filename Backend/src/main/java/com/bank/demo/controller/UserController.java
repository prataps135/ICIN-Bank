package com.bank.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.demo.exception.ListEmptyException;
import com.bank.demo.exception.UserAlreadyExistsException;
import com.bank.demo.exception.UserNotFoundException;
import com.bank.demo.model.User;
import com.bank.demo.service.UserService;

@RestController
@Validated
@RequestMapping(value = "/api/v1/bank")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	@CrossOrigin
	@GetMapping(value ="/users")
	public ResponseEntity<List<User>> getAllUsers() throws Exception{
		List<User> users = userService.getAllUsers();
		if(users.isEmpty()) {
			throw new ListEmptyException();
		}
		return new ResponseEntity<>(users,HttpStatus.OK);
	}
	
	@CrossOrigin
	@PostMapping(value ="/users")
	public ResponseEntity<User> addUser(@RequestBody User user) throws Exception{
		String username = user.getUsername();
		if(username != null && !"".equals(username)) {
			User existingUser = userService.getByUsername(username);
			if(existingUser != null) {
				throw new UserAlreadyExistsException();
			}
		}
		User newUser = userService.addUser(user);
		return new ResponseEntity<>(newUser,HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping(value = "/users/{username}")
	public ResponseEntity<User> getUserByUsername(@PathVariable String username) throws Exception{
		User user = userService.getByUsername(username);
		if(user == null) {
			throw new UserNotFoundException();
		}
		return new ResponseEntity<>(user,HttpStatus.OK);
	}
	
	@CrossOrigin
	@DeleteMapping(value = "/users/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable int id) throws Exception{
		User user = userService.deleteUser(id);
		if(user == null) {
			throw new UserNotFoundException();
		}
		return new ResponseEntity<>(user,HttpStatus.OK);
	}
}
