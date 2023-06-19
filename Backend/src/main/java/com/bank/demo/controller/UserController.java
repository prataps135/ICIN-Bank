package com.bank.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> users = userService.getAllUsers();
		return new ResponseEntity<>(users,HttpStatus.OK);
	}
	
	@CrossOrigin
	@PostMapping(value ="/users")
	public ResponseEntity<User> addUser(@RequestBody User user){
		User newUser = userService.addUser(user);
		return new ResponseEntity<>(newUser,HttpStatus.OK);
	}
}
