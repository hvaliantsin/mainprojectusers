package com.cogent.consignment.model;

import com.cogent.client.model.Client;
import com.cogent.staff.model.Staff;
import com.cogent.transportcentre.model.TransportCentre;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "consignment")
//add identity
public class Consignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cons_id")
    private Long consId;
    @Column(name = "type")
    private ConsignmentType type;
    @Column(name = "cons_weight")
    private Float consWeight;
    //@JsonBackReference
    @JsonIgnoreProperties(value = "consignments", allowSetters = true)
    @ManyToOne
    @JoinColumn(name = "tc_id")
    private TransportCentre tc;
    @Column(name = "cons_date")
    private LocalDate consDate;
    @Column(name = "cons_del_date")
    private LocalDate consDeliveryDate;
    @Column(name = "cons_del_address")
    private String consDeliveryAddress;
    @JsonIgnoreProperties(value = "consignments", allowSetters = true)
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;
    @Column(name = "cons_del_amount")
    private Float consDeliveryAmount;
    @Column(name = "status")
    private String status;
    @Column(name = "staff_id")
    private Long staffId;

    public Consignment() {
    }

    public Consignment(ConsignmentType type, Float consWeight, TransportCentre tc, LocalDate consDate, LocalDate consDeliveryDate, String consDeliveryAddress, Client client, Float consDeliveryAmount) {
        this.type = type;
        this.consWeight = consWeight;
        this.tc = tc;
        this.consDate = consDate;
        this.consDeliveryDate = consDeliveryDate;
        this.consDeliveryAddress = consDeliveryAddress;
        this.client = client;
        this.consDeliveryAmount = consDeliveryAmount;
    }

    public Long getStaffId() {
        return staffId;
    }

    public void setStaffId(Long staff) {
        this.staffId = staff;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getConsId() {
        return consId;
    }

    public void setConsId(Long consId) {
        this.consId = consId;
    }

    public ConsignmentType getType() {
        return type;
    }

    public void setType(ConsignmentType type) {
        this.type = type;
    }

    public Float getConsWeight() {
        return consWeight;
    }

    public void setConsWeight(Float consWeight) {
        this.consWeight = consWeight;
    }

    public TransportCentre getTc() {
        return tc;
    }

    public void setTc(TransportCentre tc) {
        this.tc = tc;
    }

    public LocalDate getConsDate() {
        return consDate;
    }

    public void setConsDate(LocalDate consDate) {
        this.consDate = consDate;
    }

    public LocalDate getConsDeliveryDate() {
        return consDeliveryDate;
    }

    public void setConsDeliveryDate(LocalDate consDeliveryDate) {
        this.consDeliveryDate = consDeliveryDate;
    }

    public String getConsDeliveryAddress() {
        return consDeliveryAddress;
    }

    public void setConsDeliveryAddress(String consDeliveryAddress) {
        this.consDeliveryAddress = consDeliveryAddress;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Float getConsDeliveryAmount() {
        return consDeliveryAmount;
    }

    public void setConsDeliveryAmount(Float consDeliveryAmount) {
        this.consDeliveryAmount = consDeliveryAmount;
    }
}
