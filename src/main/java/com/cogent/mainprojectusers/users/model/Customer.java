package com.cogent.mainprojectusers.users.model;

import com.cogent.mainprojectusers.task.model.DeliveryTask;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "customers")
public class Customer extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long customerId;

    @OneToMany
    private Set<DeliveryTask> deliveryTask = new HashSet<>();

    @Override
    public void setRole() {
        this.role.setRoleName("CUSTOMER");
    }
}
