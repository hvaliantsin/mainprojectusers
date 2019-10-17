package com.cogent.transportcentre.model;

import javax.persistence.*;

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
}