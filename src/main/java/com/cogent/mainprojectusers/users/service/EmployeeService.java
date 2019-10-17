package com.cogent.mainprojectusers.users.service;

import com.cogent.mainprojectusers.users.model.Employee;
import com.cogent.mainprojectusers.users.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService extends AbstractUserService<Employee, EmployeeRepository> {
    public EmployeeService(EmployeeRepository repository) {
        super(repository);
    }
}
