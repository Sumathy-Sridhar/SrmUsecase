package com.srm.userbackend.userbackend.Controller;

import java.util.List;

import com.srm.userbackend.userbackend.Entity.CibilScore;
import com.srm.userbackend.userbackend.Services.CibilService;

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
public class CibilControlller extends BaseController {

    @Autowired
    private CibilService cibilserv;

    @PostMapping(value = "/postcibil", produces = MediaType.APPLICATION_JSON_VALUE)
    public void addAdmin(@RequestBody CibilScore cibi) {
        cibilserv.addCibil(cibi);
        System.out.println(cibi.toString());
    }

    @GetMapping(value = "/getcibil", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CibilScore> getAllCibil() {
        return cibilserv.getAllCibil();
    }

}
