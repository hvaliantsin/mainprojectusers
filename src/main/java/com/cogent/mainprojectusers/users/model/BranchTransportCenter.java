package com.cogent.mainprojectusers.users.model;

import com.cogent.mainprojectusers.task.model.DeliveryTask;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "branches")
public class BranchTransportCenter extends User {


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "branch_id")
    private Long branchId;

   // @NotNull
    @Column(name = "branch_name")
    private String brunchName;

    @Column(name = "branch_address")
    private String brunchAddress;

    @Column(name = "branch_phone")
    private Long phoneNumber;

    public String getBrunchAddress() {
        return brunchAddress;
    }

    public void setBrunchAddress(String brunchAddress) {
        this.brunchAddress = brunchAddress;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
//    @OneToMany(mappedBy = "tasks", cascade = CascadeType.ALL)
//    private Set<DeliveryTask> tasks = new HashSet<>();
//
//    @OneToMany(mappedBy = "employees", cascade = CascadeType.ALL)
//    private Set<Employee> employees = new HashSet<>();

//    @Override
//    public void setRole() {
//        this.role.setRoleName("BRANCH");
//    }

    public Long getBranchId() {
        return branchId;
    }

    public void setBranchId(Long branchId) {
        this.branchId = branchId;
    }

    public String getBrunchName() {
        return brunchName;
    }

    public void setBrunchName(String brunchName) {
        this.brunchName = brunchName;
    }

//    public Set<DeliveryTask> getTasks() {
//        return tasks;
//    }
//
//    public void setTasks(Set<DeliveryTask> tasks) {
//        this.tasks = tasks;
//    }
//
//    public Set<Employee> getEmployees() {
//        return employees;
//    }
//
//    public void setEmployees(Set<Employee> employees) {
//        this.employees = employees;
//    }
}
