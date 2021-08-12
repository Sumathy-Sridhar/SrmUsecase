package com.srm.userbackend.userbackend.Repo;

import com.srm.userbackend.userbackend.Entity.CardDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepo extends JpaRepository<CardDetails, Integer> {

}
