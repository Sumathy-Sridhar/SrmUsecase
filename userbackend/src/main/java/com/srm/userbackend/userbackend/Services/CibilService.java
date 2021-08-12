package com.srm.userbackend.userbackend.Services;

import java.util.List;

import com.srm.userbackend.userbackend.Entity.CibilScore;

public interface CibilService {

    public void addCibil(CibilScore cibil);

    public List<CibilScore> getAllCibil();

}
