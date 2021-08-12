package com.srm.userbackend.userbackend.Services;

import java.util.ArrayList;
import java.util.List;

import com.srm.userbackend.userbackend.Entity.CibilScore;
import com.srm.userbackend.userbackend.Repo.CibilRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CibilServiceImpl implements CibilService {

    @Autowired
    private CibilRepo cibilrepo;

    @Override
    public void addCibil(CibilScore cibil) {
        cibilrepo.save(cibil);
    }

    @Override
    public List<CibilScore> getAllCibil() {
        List<CibilScore> cibilRecords = new ArrayList<>();
        cibilrepo.findAll().forEach(cibilRecords::add);
        return cibilRecords;
    }

}
