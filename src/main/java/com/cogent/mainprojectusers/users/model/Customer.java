package com.cogent.mainprojectusers.users.model;

import com.cogent.mainprojectusers.task.model.DeliveryTask;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "customers")
public class Customer extends User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long customerId;
//
//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "tasks", cascade = CascadeType.ALL)
//    private Set<DeliveryTask> deliveryTask = new HashSet<>();

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

//    public Set<DeliveryTask> getDeliveryTask() {
//        return deliveryTask;
//    }
//
//    public void setDeliveryTask(Set<DeliveryTask> deliveryTask) {
//        this.deliveryTask = deliveryTask;
//    }
//    @Override
//    public void setRole() {
//        this.role.setRoleName("CUSTOMER");
//    }
}
