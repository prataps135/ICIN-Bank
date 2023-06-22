package com.bank.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.demo.exception.ListEmptyException;
import com.bank.demo.model.Statement;
import com.bank.demo.service.StatementService;

@RestController
@RequestMapping(value = "/api/v1/bank")
public class StatementController {

	@Autowired
	private StatementService statementService;

	@CrossOrigin
	@GetMapping(value = "/statement")
	public ResponseEntity<List<Statement>> getAllStatement() throws Exception {
		List<Statement> statements = statementService.getAllStatement();
		if (statements.isEmpty()) {
			throw new ListEmptyException();
		}
		return new ResponseEntity<>(statements, HttpStatus.OK);
	}

	@CrossOrigin
	@PostMapping(value = "/statement")
	public ResponseEntity<Statement> addStatement(@RequestBody Statement statement) {
		Statement newStatement = statementService.addStatement(statement);
		return new ResponseEntity<>(newStatement, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(value = "/statement/{accountNumber}")
	public ResponseEntity<List<Statement>> getStatementByAccountNumber(@PathVariable long accountNumber) throws Exception {
		List<Statement> allStatement = statementService.getAllStatement();
		List<Statement> filteredStatement = new ArrayList<>();
		
//		ListIterator<Statement> itr = allStatement.listIterator();
//		while (itr.hasNext()) {
//			if (itr.next().getAccountNumber() == accountNumber) {
//				itr.previous();
//				filteredStatement.add(itr.next());
//			}
//		}
		
		for(Statement st:allStatement) {
			if(st.getAccountNumber() == accountNumber) {
				filteredStatement.add(st);
			}
		}
		
		if(allStatement.isEmpty() || filteredStatement.isEmpty()) {
			throw new ListEmptyException();
		}

		return new ResponseEntity<>(filteredStatement, HttpStatus.OK);
	}

}
