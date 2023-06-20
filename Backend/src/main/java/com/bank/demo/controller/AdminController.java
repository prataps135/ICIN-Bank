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

import com.bank.demo.exception.AdminAlreadyExistsException;
import com.bank.demo.exception.ListEmptyException;
import com.bank.demo.model.Admin;
import com.bank.demo.service.AdminService;

@RestController
@Validated
@RequestMapping(value = "/api/v1/bank")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@CrossOrigin
	@GetMapping(value = "/admin")
	public ResponseEntity<List<Admin>> getAllAdmin() throws Exception {
		List<Admin> admins = adminService.getAllAdmin();
		if (admins.isEmpty()) {
			throw new ListEmptyException();
		}
		return new ResponseEntity<>(admins, HttpStatus.OK);
	}

	@CrossOrigin
	@PostMapping(value = "/admin")
	public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) throws Exception {
		String username = admin.getUsername();
		if (username != null && !"".equals(username)) {
			Admin existingAdmin = adminService.getByUsername(username);
			if (existingAdmin != null) {
				throw new AdminAlreadyExistsException();
			}
		}
		Admin newAdmin = adminService.addAdmin(admin);
		return new ResponseEntity<>(newAdmin, HttpStatus.OK);
	}

}
