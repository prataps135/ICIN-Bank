package com.bank.demo.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.demo.exception.ListEmptyException;
import com.bank.demo.model.ChequeBook;
import com.bank.demo.service.ChequeBookService;

@RestController
@RequestMapping(value = "/api/v1/bank")
public class ChequeBookController {

	@Autowired
	ChequeBookService bookService;

	@CrossOrigin
	@GetMapping(value = "/cheque-book")
	public ResponseEntity<List<ChequeBook>> getAllChequeBooks() throws Exception {
		List<ChequeBook> chequeBooks = bookService.getAllChequeBooks();
		if (chequeBooks.isEmpty()) {
			throw new ListEmptyException();
		}
		return new ResponseEntity<>(chequeBooks, HttpStatus.OK);
	}

	@CrossOrigin
	@PostMapping(value = "/cheque-book")
	public ResponseEntity<ChequeBook> addChequeBook(@RequestBody ChequeBook chequeBook) {
		ChequeBook newChequeBook = bookService.addChequeBook(chequeBook);
		return new ResponseEntity<>(newChequeBook, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(value = "/cheque-book")
	public ResponseEntity<ChequeBook> updateStatus(@RequestBody ChequeBook chequeBook) {
		ChequeBook updatedBook = bookService.updateStatus(chequeBook);
		return new ResponseEntity<>(updatedBook, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(value = "cheque-book/{accountNumber}")
	public ResponseEntity<ChequeBook> getByAccuontNumber(@PathVariable long accountNumber) {
		List<ChequeBook> books = bookService.getAllChequeBooks();
		ChequeBook chequeBook = new ChequeBook();
		Iterator<ChequeBook> itr = books.iterator();

		while (itr.hasNext()) {
			ChequeBook b = itr.next();
			if (b.getAccountNumber() == accountNumber) {
				chequeBook = b;
			}
		}
		return new ResponseEntity<>(chequeBook, HttpStatus.OK);
	}

}
