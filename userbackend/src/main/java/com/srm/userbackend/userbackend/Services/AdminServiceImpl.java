package com.srm.userbackend.userbackend.Services;

import java.util.ArrayList;
import java.util.List;

import com.srm.userbackend.userbackend.Entity.AdminSignup;
import com.srm.userbackend.userbackend.Repo.AdminRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepo adrepo;

    @Override
    public void addAdmin(AdminSignup adsign) {
        adrepo.save(adsign);
    }

    @Override
    public List<AdminSignup> getAllAdmin() {
        List<AdminSignup> admminRecords = new ArrayList<>();
        adrepo.findAll().forEach(admminRecords::add);
        return admminRecords;
    }

}
