package com.cogent.mainprojectusers.users.model;

import org.springframework.context.annotation.Primary;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

//@MappedSuperclass
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class User implements Serializable {
    @Id
    @Column(name = "uid")
    @GeneratedValue(strategy = GenerationType.TABLE)
    protected Long userId;
   // @NotNull
    @Column(name = "username")
    protected String username;
    //@NotNull
    @Column(name = "password")
    protected String password;
    //@NotNull
    @Column(name = "email")
    protected String email;

//    @ManyToOne
//    @JoinColumn(name = "role_id")
//    protected Role role;
// public Role getRole() {
//        return role;
//    }
//    public abstract void setRole();

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String fullName) {
        this.password = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
