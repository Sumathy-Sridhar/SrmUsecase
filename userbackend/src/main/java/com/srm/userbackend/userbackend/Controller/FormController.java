package com.srm.userbackend.userbackend.Controller;

import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.databind.JsonSerializable.Base;
import com.srm.userbackend.userbackend.Entity.ApplicationForm;
import com.srm.userbackend.userbackend.Services.FormService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ApplicationObjectSupport;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class FormController extends BaseController {

    @Autowired
    private FormService fs;

    @GetMapping(value = "/getform", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ApplicationForm> getAllData() {
        return fs.getAllData();
    }

    @GetMapping(value = "/getform/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<ApplicationForm> getData(@PathVariable Integer id) {
        return fs.getData(id);
    }

    @PostMapping(value = "/application", produces = MediaType.APPLICATION_JSON_VALUE)
    public void addData(@RequestBody ApplicationForm af) {
        fs.addData(af);
        System.out.println(af.toString());

    }

    @PutMapping(value = "/update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateForm(@PathVariable int id, @RequestBody ApplicationForm af) {
        fs.updateForm(id, af);
    }

}
