package com.bank.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.demo.model.ChequeBook;

public interface ChequeBookRepo extends JpaRepository<ChequeBook, Integer>{

}
