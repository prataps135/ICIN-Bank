package com.bank.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.demo.model.Admin;
import com.bank.demo.repo.AdminRepo;
import com.bank.demo.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepo adminRepo;

	@Override
	public Admin addAdmin(Admin admin) {
		Admin newAdmin = adminRepo.save(admin);
		return newAdmin;
	}

	@Override
	public List<Admin> getAllAdmin() {
		List<Admin> admins = adminRepo.findAll();
		return admins;
	}
	
	@Override
	public Admin getByUsername(String username) {
		Admin admin = adminRepo.findByUsername(username);
		return admin;
	}
	
	
}
