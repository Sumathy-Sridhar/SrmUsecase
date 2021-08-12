package com.srm.userbackend.userbackend.Controller;

import java.util.List;

import com.srm.userbackend.userbackend.Entity.CardDetails;
import com.srm.userbackend.userbackend.Services.CardService;

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
public class CardController extends BaseController {

    @Autowired
    private CardService cs;

    @PostMapping(value = "/postcards", produces = MediaType.APPLICATION_JSON_VALUE)
    public void addCards(@RequestBody CardDetails cd) {
        cs.addCards(cd);
        System.out.println(cd.toString());

    }

    @GetMapping(value = "/getcards", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CardDetails> getAllCards() {
        return cs.getAllCards();
    }

}
