package com.bank.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bank.demo.model.Admin;

@Component
public interface AdminService {
	Admin addAdmin(Admin admin);

	List<Admin> getAllAdmin();

	Admin getByUsername(String username);

	Admin deleteAdmin(int id);

	Admin getById(int id);

	Admin updateAdmin(int id, Admin admin);
}
