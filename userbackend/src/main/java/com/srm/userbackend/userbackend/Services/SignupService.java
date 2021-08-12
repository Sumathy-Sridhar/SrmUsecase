package com.srm.userbackend.userbackend.Services;

import java.util.List;
import java.util.Optional;

import com.srm.userbackend.userbackend.Entity.SignupClass;

public interface SignupService {

    public void addUsers(SignupClass sgn);

    public List<SignupClass> getAllUsers();

}
