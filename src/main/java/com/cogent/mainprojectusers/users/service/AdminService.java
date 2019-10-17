package com.cogent.mainprojectusers.users.service;

import com.cogent.mainprojectusers.users.model.Admin;
import com.cogent.mainprojectusers.users.repository.AdminRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminService extends AbstractUserService<Admin, AdminRepository> {
    public AdminService(AdminRepository repository){
        super(repository);
    }

}
