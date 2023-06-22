package com.bank.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.demo.model.Statement;
import com.bank.demo.repo.StatementRepo;
import com.bank.demo.service.StatementService;

@Service
public class StatementServiceImpl implements StatementService {

	@Autowired
	private StatementRepo statementRepo;

	@Override
	public List<Statement> getAllStatement() {
		List<Statement> statements = statementRepo.findAll();
		return statements;
	}

	@Override
	public Statement addStatement(Statement statement) {
		Statement newStatement = statementRepo.save(statement);
		return newStatement;
	}
}
