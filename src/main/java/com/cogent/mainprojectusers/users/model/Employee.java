package com.cogent.mainprojectusers.users.model;

import com.cogent.mainprojectusers.task.model.DeliveryTask;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Table(name = "employees")
public class Employee extends User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emp_id")
    private Long empId;
//    @NotNull
//    @Column(name = "income")
//    private Double income;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinTable( name = "branch_employees", joinColumns = {@JoinColumn(name = "emp_id")},
//            inverseJoinColumns = {@JoinColumn(name = "branch_id"),@JoinColumn(name = "branch_name")})
//    private BranchTransportCenter branchTransportCenter;
//
//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "tasks", cascade = CascadeType.ALL)
//    private Set<DeliveryTask> deliveryTasks;

//    @Override
//    public void setRole() {
//        this.role.setRoleName("EMPLOYEE");
//    }

    public Long getEmpId() {
        return empId;
    }

    public void setEmpId(Long empId) {
        this.empId = empId;
    }
//
//    public Double getIncome() {
//        return income;
//    }
//
//    public void setIncome(Double income) {
//        this.income = income;
//    }

//    public BranchTransportCenter getBranchTransportCenter() {
//        return branchTransportCenter;
//    }
//
//    public void setBranchTransportCenter(BranchTransportCenter branchTransportCenter) {
//        this.branchTransportCenter = branchTransportCenter;
//    }
//
//    public Set<DeliveryTask> getDeliveryTasks() {
//        return deliveryTasks;
//    }
//
//    public void setDeliveryTasks(Set<DeliveryTask> deliveryTasks) {
//        this.deliveryTasks = deliveryTasks;
//    }
}
