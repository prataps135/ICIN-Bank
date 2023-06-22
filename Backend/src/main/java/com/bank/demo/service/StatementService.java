package com.bank.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bank.demo.model.Statement;

@Component
public interface StatementService {
	List<Statement> getAllStatement();
	Statement addStatement(Statement statement);
}
