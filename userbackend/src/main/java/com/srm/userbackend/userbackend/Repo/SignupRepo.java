package com.srm.userbackend.userbackend.Repo;

import com.srm.userbackend.userbackend.Entity.SignupClass;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignupRepo extends JpaRepository<SignupClass, Integer> {

}
