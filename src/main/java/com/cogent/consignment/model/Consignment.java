package com.cogent.consignment.model;

import com.cogent.client.model.Client;
import com.cogent.transportcentre.model.TransportCentre;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private TransportCentre consDeliveryLoc;
    @Column(name = "cons_date")
    private LocalDate consDate;
    @Column(name = "cons_del_date")
    private LocalDate consDeliveryDate;
    @Column(name = "cons_del_address")
    private String consDeliveryAddress;
    @JsonIgnoreProperties(value = "consignments", allowSetters = true)
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client consClient;
    @Column(name = "cons_del_ammount")
    private Float consDeliveryAmmount;

    public Consignment() {
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

    public TransportCentre getConsDeliveryLoc() {
        return consDeliveryLoc;
    }

    public void setConsDeliveryLoc(TransportCentre consDeliveryLoc) {
        this.consDeliveryLoc = consDeliveryLoc;
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

    public Client getConsClient() {
        return consClient;
    }

    public void setConsClient(Client consClient) {
        this.consClient = consClient;
    }

    public Float getConsDeliveryAmmount() {
        return consDeliveryAmmount;
    }

    public void setConsDeliveryAmmount(Float consDeliveryAmmount) {
        this.consDeliveryAmmount = consDeliveryAmmount;
    }
}
