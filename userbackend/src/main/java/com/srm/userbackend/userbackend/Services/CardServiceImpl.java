package com.srm.userbackend.userbackend.Services;

import java.util.ArrayList;
import java.util.List;

import com.srm.userbackend.userbackend.Entity.ApplicationForm;
import com.srm.userbackend.userbackend.Entity.CardDetails;
import com.srm.userbackend.userbackend.Repo.CardRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardServiceImpl implements CardService {

    @Autowired
    private CardRepo crepo;

    @Override
    public void addCards(CardDetails cdet) {
        ApplicationForm afobj = new ApplicationForm();
        afobj.setCardholdername("Sumathy");
        afobj.setCtype("Regalia creditcard");
        afobj.setAge(24);
        afobj.setCountry("India");
        afobj.setEmail("sumi@gmail.com");
        afobj.setIncome("80000");
        afobj.setPannumber("ABCDE123A");
        cdet.setApform(afobj);
        crepo.save(cdet);
    }

    @Override
    public List<CardDetails> getAllCards() {

        List<CardDetails> cardRecords = new ArrayList<>();
        crepo.findAll().forEach(cardRecords::add);
        return cardRecords;

    }

}
