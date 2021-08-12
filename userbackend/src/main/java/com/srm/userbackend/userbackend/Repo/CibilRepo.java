package com.srm.userbackend.userbackend.Repo;

import com.srm.userbackend.userbackend.Entity.CibilScore;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CibilRepo extends JpaRepository<CibilScore, Integer> {

}
