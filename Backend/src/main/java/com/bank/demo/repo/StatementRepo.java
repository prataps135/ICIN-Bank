package com.bank.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.demo.model.Statement;

public interface StatementRepo extends JpaRepository<Statement, Integer>{

}
