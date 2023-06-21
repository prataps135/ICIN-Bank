package com.bank.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

//@ResponseStatus
@ControllerAdvice
public class GlobalExceptionHadler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(value = UserAlreadyExistsException.class)
	public ResponseEntity<Object> exception(UserAlreadyExistsException ex) {
		return new ResponseEntity<>("User already exists in database.", HttpStatus.CONFLICT);
	}

	@ExceptionHandler(value = AdminAlreadyExistsException.class)
	public ResponseEntity<Object> exception(AdminAlreadyExistsException ex) {
		return new ResponseEntity<>("Admin already exists in database", HttpStatus.CONFLICT);
	}

	@ExceptionHandler(value = ListEmptyException.class)
	public ResponseEntity<Object> exception(ListEmptyException ex) {
		return new ResponseEntity<>("List is empty", HttpStatus.CONFLICT);
	}

	@ExceptionHandler(value = AdminNotFoundException.class)
	public ResponseEntity<Object> exception(AdminNotFoundException ex) {
		return new ResponseEntity<>("Admin not found in database", HttpStatus.CONFLICT);
	}

	@ExceptionHandler(value = UserNotFoundException.class)
	public ResponseEntity<Object> exception(UserNotFoundException ex) {
		return new ResponseEntity<>("User not found in database", HttpStatus.CONFLICT);
	}

	@ExceptionHandler(value = AccountNotFoundException.class)
	public ResponseEntity<Object> exception(AccountNotFoundException ex) {
		return new ResponseEntity<>("Account not found in database", HttpStatus.CONFLICT);
	}

}
