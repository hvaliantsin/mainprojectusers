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

    @ManyToOne
    @JoinColumn(name = "branch_id")
    private BranchTransportCenter branch;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "emp_id")
    private Employee employee;

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

    public BranchTransportCenter getBranch() {
        return branch;
    }

    public void setBranch(BranchTransportCenter branch) {
        this.branch = branch;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
