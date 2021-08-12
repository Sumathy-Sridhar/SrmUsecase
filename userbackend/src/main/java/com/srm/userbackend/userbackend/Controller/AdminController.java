package com.srm.userbackend.userbackend.Controller;

import java.util.List;

import com.srm.userbackend.userbackend.Entity.AdminSignup;
import com.srm.userbackend.userbackend.Services.AdminService;

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
@RequestMapping("/api")
public class AdminController extends BaseController {

    @Autowired
    private AdminService ads;

    @PostMapping(value = "/postadmin", produces = MediaType.APPLICATION_JSON_VALUE)
    public void addAdmin(@RequestBody AdminSignup adminsign) {
        ads.addAdmin(adminsign);
        System.out.println(adminsign.toString());
    }

    @GetMapping(value = "/getadmin", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<AdminSignup> getAllAdmin() {
        return ads.getAllAdmin();
    }
}
