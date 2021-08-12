package com.srm.userbackend.userbackend.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.srm.userbackend.userbackend.Entity.SignupClass;
import com.srm.userbackend.userbackend.Repo.SignupRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignupServiceImpl implements SignupService {

    @Autowired
    private SignupRepo signuprepo;

    @Override
    public List<SignupClass> getAllUsers() {
        List<SignupClass> userRecords = new ArrayList<>();
        signuprepo.findAll().forEach(userRecords::add);
        return userRecords;

    }

    @Override
    public void addUsers(SignupClass sgn) {
        signuprepo.save(sgn);

    }

}
