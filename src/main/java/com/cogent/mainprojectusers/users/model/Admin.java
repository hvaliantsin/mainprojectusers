package com.cogent.mainprojectusers.users.model;

import javax.persistence.*;

@Entity
@Table(name = "admins")
public class Admin extends User {
    @Column(name = "admin_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminId;

    public Long getAdminId() {
        return adminId;
    }

    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }

//    @Override
//    public void setRole() {
//        this.role.setRoleName("Admin");
//    }

}
