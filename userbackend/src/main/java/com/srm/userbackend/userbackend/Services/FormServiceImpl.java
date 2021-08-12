package com.srm.userbackend.userbackend.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.srm.userbackend.userbackend.Entity.ApplicationForm;
import com.srm.userbackend.userbackend.Repo.FormRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormServiceImpl implements FormService {

    @Autowired
    private FormRepo frepo;

    @Override
    public void addData(ApplicationForm af) {
        frepo.save(af);

    }

    @Override
    public Optional<ApplicationForm> getData(int id) {

        return frepo.findById(id);
    }

    @Override
    public void updateForm(int id, ApplicationForm af) {

        frepo.save(af);

    }

    @Override
    public List<ApplicationForm> getAllData() {

        List<ApplicationForm> formRecords = new ArrayList<>();
        frepo.findAll().forEach(formRecords::add);
        return formRecords;
    }

}
