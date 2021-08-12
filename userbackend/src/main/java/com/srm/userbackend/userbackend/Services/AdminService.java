package com.srm.userbackend.userbackend.Services;

import java.util.List;

import com.srm.userbackend.userbackend.Entity.AdminSignup;

public interface AdminService {

    public void addAdmin(AdminSignup adsign);

    public List<AdminSignup> getAllAdmin();
}
