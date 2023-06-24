package com.bank.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bank.demo.model.ChequeBook;

@Component
public interface ChequeBookService {
	ChequeBook addChequeBook(ChequeBook chequeBook);
	List<ChequeBook> getAllChequeBooks();
	ChequeBook updateStatus(ChequeBook chequeBook);
}
