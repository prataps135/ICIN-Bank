package com.bank.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.demo.model.ChequeBook;
import com.bank.demo.repo.ChequeBookRepo;
import com.bank.demo.service.ChequeBookService;

@Service
public class ChequeBookServiceImpl implements ChequeBookService{

	@Autowired
	private ChequeBookRepo bookRepo;
	
	@Override
	public ChequeBook addChequeBook(ChequeBook chequeBook) {
		ChequeBook newChequeBook = bookRepo.save(chequeBook);
		return newChequeBook;
	}

	@Override
	public List<ChequeBook> getAllChequeBooks() {
		List<ChequeBook> chequeBooks = bookRepo.findAll();
		return chequeBooks;
	}

	@Override
	public ChequeBook updateStatus(ChequeBook chequeBook) {
		ChequeBook existingBook = bookRepo.findById(chequeBook.getId()).get();
		existingBook.setStatus(chequeBook.getStatus());
		ChequeBook updatedBook = bookRepo.save(existingBook);
		return updatedBook;
	}
	
}
