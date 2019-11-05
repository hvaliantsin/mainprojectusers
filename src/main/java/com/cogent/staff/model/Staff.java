package com.cogent.staff.model;

import com.cogent.transportcentre.model.TransportCentre;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.LocalDate;

// add formula
// add temporal
// add creationtimestamp
// add
@Entity
@Table(name = "staff")
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "staff_id")
    private Long staffId;
    @Column(name = "staff_name")
    private String staffName;
    @Column(name = "date_of_joining")
    private LocalDate dateOfJoining = LocalDate.now();
    @Column(name = "base_salary")
    private Float baseSalary;
    @Column(name = "hra")
    private Float houseRateAllowance;
    @Column(name = "ta")
    private Float tuitionAssistance;
    @Column(name = "incentive")
    private Float incentive;
    @Email
    @Column(name = "email")
    private String email;
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;
    //@JsonBackReference
    @JsonIgnoreProperties(value = "staffSet", allowSetters = true)
    @ManyToOne
    @JoinColumn(name = "tc_id")
    private TransportCentre tc;
    @Column(name = "staff_username")
    private String staffUsername;


    public Staff() {
    }

    public Staff(String staffName, Float baseSalary, Float incentive, @Email String email, Role role, TransportCentre tc) {
        this.staffName = staffName;
        this.baseSalary = baseSalary;
        this.incentive = incentive;
        this.email = email;
        this.role = role;
        this.tc = tc;
        this.dateOfJoining = LocalDate.now();
        this.houseRateAllowance=baseSalary*0.2f;
        this.tuitionAssistance=baseSalary*0.25f;
    }

    public LocalDate getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(LocalDate dateOfJoining) {

    }

    public Float getBaseSalary() {
        return baseSalary;
    }

    public void setBaseSalary(Float baseSalary) {
        this.baseSalary = baseSalary;
        setHouseRateAllowance(baseSalary*0.2f);
        setTuitionAssistance(baseSalary*0.25f);
    }

    public Long getStaffId() {
        return staffId;
    }

    public void setStaffId(Long staffId) {
        this.staffId = staffId;
    }

    public String getStaffName() {
        return staffName;
    }

    public void setStaffName(String staffName) {
        this.staffName = staffName;
    }

    public Float getHouseRateAllowance() {
        return houseRateAllowance;
    }

    public void setHouseRateAllowance(Float houseRateAllowance) {
        this.houseRateAllowance = houseRateAllowance;
    }

    public Float getTuitionAssistance() {
        return tuitionAssistance;
    }

    public void setTuitionAssistance(Float tuitionAssistance) {
        this.tuitionAssistance = tuitionAssistance;
    }

    public Float getIncentive() {
        return incentive;
    }

    public void setIncentive(Float incentive) {
        this.incentive = incentive;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public TransportCentre getTc() {
        return tc;
    }

    public void setTc(TransportCentre tc) {
        this.tc = tc;
    }

    public String getStaffUsername() {
        return staffUsername;
    }

    public void setStaffUsername(String staffUsername) {
        this.staffUsername = staffUsername;
    }
}
