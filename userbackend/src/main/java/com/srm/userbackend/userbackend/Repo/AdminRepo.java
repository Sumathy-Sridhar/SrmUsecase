package com.srm.userbackend.userbackend.Repo;

import com.srm.userbackend.userbackend.Entity.AdminSignup;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends JpaRepository<AdminSignup, Integer> {

}
