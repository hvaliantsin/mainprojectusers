package com.cogent.mainprojectusers.users.service;

import com.cogent.mainprojectusers.users.model.Customer;
import com.cogent.mainprojectusers.users.repository.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class CustomerService extends AbstractUserService<Customer, CustomerRepository> {
    public CustomerService(CustomerRepository repository) {
        super(repository);
    }
}
