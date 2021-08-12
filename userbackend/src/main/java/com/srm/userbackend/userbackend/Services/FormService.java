package com.srm.userbackend.userbackend.Services;

import com.srm.userbackend.userbackend.Entity.ApplicationForm;
import java.util.List;
import java.util.Optional;

public interface FormService {

    public void addData(ApplicationForm af);

    public List<ApplicationForm> getAllData();

    public Optional<ApplicationForm> getData(int id);

    public void updateForm(int id, ApplicationForm af);
}
