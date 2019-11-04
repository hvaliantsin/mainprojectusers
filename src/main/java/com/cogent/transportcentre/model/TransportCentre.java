package com.cogent.transportcentre.model;

import com.cogent.consignment.model.Consignment;
import com.cogent.staff.model.Staff;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "transport_centres")
public class TransportCentre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tc_id")
    private Long tcId;
    @Column(name = "tc_name")
    private String tcName;
    @Column(name = "tc_address")
    private String tcAddress;
    @Column(name = "tc_phone_number")
    private Long tcPhoneNumber;
    @Column(name = "tc_email")
    private String tcEmail;
    //@JsonManagedReference
    @JsonIgnoreProperties(value = "tc", allowSetters = true)
    @OneToMany(mappedBy = "tc", cascade = CascadeType.ALL)
    private Set<Staff> staffSet;
    @JsonIgnoreProperties(value = "consDeliveryLoc", allowSetters = true)
    @OneToMany(mappedBy = "consDeliveryLoc", cascade = CascadeType.ALL)
    private Set<Consignment> consignments;



    public TransportCentre() {
    }

    public Set<Staff> getStaffSet() {
        return staffSet;
    }

    public void setStaffSet(Set<Staff> staffSet) {
        this.staffSet = staffSet;
    }

    public Long getTcId() {
        return tcId;
    }

    public void setTcId(Long tcId) {
        this.tcId = tcId;
    }

    public String getTcName() {
        return tcName;
    }

    public void setTcName(String tcName) {
        this.tcName = tcName;
    }

    public String getTcAddress() {
        return tcAddress;
    }

    public void setTcAddress(String tcAddress) {
        this.tcAddress = tcAddress;
    }

    public Long getTcPhoneNumber() {
        return tcPhoneNumber;
    }

    public void setTcPhoneNumber(Long tcPhoneNumber) {
        this.tcPhoneNumber = tcPhoneNumber;
    }

    public String getTcEmail() {
        return tcEmail;
    }

    public void setTcEmail(String tcEmail) {
        this.tcEmail = tcEmail;
    }

    public Set<Consignment> getConsignments() {
        return consignments;
    }

    public void setConsignments(Set<Consignment> consignments) {
        this.consignments = consignments;
    }
}
