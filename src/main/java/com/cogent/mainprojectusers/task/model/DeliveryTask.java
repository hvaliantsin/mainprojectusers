package com.cogent.mainprojectusers.task.model;


import com.cogent.mainprojectusers.users.model.BranchTransportCenter;
import com.cogent.mainprojectusers.users.model.Customer;
import com.cogent.mainprojectusers.users.model.Employee;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tasks")
public class DeliveryTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Long dtId;
    @Column(name = "status")
    @NotNull
    private String status;
    @Column(name = "delivery_address")
    @NotNull
    private String address;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinTable( name = "branch_tasks", joinColumns = {@JoinColumn(name = "task_id")},
//    inverseJoinColumns = {@JoinColumn(name = "branch_id"),@JoinColumn(name = "branch_name")})
//    private BranchTransportCenter branch;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinTable( name = "customer_tasks", joinColumns = {@JoinColumn(name = "task_id")},
//            inverseJoinColumns = {@JoinColumn(name = "customer_id")})
//    private Customer customer;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinTable( name = "employee_tasks", joinColumns = {@JoinColumn(name = "task_id")},
//            inverseJoinColumns = {@JoinColumn(name = "emp_id")})
//    private Employee employee;

    public Long getDtId() {
        return dtId;
    }

    public void setDtId(Long dtId) {
        this.dtId = dtId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

//    public BranchTransportCenter getBranch() {
//        return branch;
//    }
//
//    public void setBranch(BranchTransportCenter branch) {
//        this.branch = branch;
//    }
//
//    public Customer getCustomer() {
//        return customer;
//    }
//
//    public void setCustomer(Customer customer) {
//        this.customer = customer;
//    }
//
//    public Employee getEmployee() {
//        return employee;
//    }
//
//    public void setEmployee(Employee employee) {
//        this.employee = employee;
//    }
}
