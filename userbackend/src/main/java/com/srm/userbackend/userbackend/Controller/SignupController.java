package com.srm.userbackend.userbackend.Controller;

import java.util.List;

import com.srm.userbackend.userbackend.Entity.SignupClass;
import com.srm.userbackend.userbackend.Services.SignupService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class SignupController extends BaseController {

    @Autowired
    private SignupService signService;

    @GetMapping(value = "/getusers", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<SignupClass> getAllUsers() {
        return signService.getAllUsers();
    }

    @PostMapping(value = "/postusers", produces = MediaType.APPLICATION_JSON_VALUE)
    public void addCards(@RequestBody SignupClass signclass) {
        signService.addUsers(signclass);
        System.out.println(signclass.toString());

    }
}
