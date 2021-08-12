package com.srm.userbackend.userbackend.Services;

import java.util.List;

import com.srm.userbackend.userbackend.Entity.CardDetails;

public interface CardService {

    public void addCards(CardDetails cdet);

    public List<CardDetails> getAllCards();
}
