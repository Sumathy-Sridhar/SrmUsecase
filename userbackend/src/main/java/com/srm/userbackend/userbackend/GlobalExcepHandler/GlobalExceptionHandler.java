package com.srm.userbackend.userbackend.GlobalExcepHandler;

import java.util.Date;

import com.srm.userbackend.userbackend.Entity.BankError;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = { RuntimeException.class })
    public ResponseEntity<BankError> handleBankException(Exception ex, WebRequest req) {

        BankError bobj = new BankError();
        bobj.setId(System.currentTimeMillis() + "");
        bobj.setErrCode("Value Error");
        bobj.setMessage(ex.toString().concat(" , Please Contact Bank Admin for futher queries..."));
        bobj.setCategory("Missing Value Error...");

        System.out.println("Error Occured.. " + ex.toString());
        ex.printStackTrace();

        return new ResponseEntity<BankError>(bobj, HttpStatus.BAD_REQUEST);

    }

}
