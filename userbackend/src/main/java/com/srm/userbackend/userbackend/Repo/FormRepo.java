package com.srm.userbackend.userbackend.Repo;

import com.srm.userbackend.userbackend.Entity.ApplicationForm;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepo extends JpaRepository<ApplicationForm, Integer> {

}
