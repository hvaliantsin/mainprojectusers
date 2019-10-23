package com.cogent.consignment.controller;

import com.cogent.client.model.Client;
import com.cogent.client.service.ClientService;
import com.cogent.consignment.model.Consignment;
import com.cogent.consignment.service.ConsignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RequestMapping("/consignment")
@RestController
public class ConsignmentController {
    @Autowired
    private ConsignmentService consignmentService;

    @GetMapping("/{consId}")
    public ResponseEntity getClientById(@PathVariable("consId") Long consId){
        Consignment consignment = consignmentService.getConsignmentById(consId);
        return new ResponseEntity<>(consignment, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Consignment>> getAllTransportCentres(){
        List<Consignment> list=consignmentService.getAllConsignment();
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> addConsignment(@RequestBody Consignment consignment, UriComponentsBuilder builder){
        Consignment flag=consignmentService.addConsignment(consignment);
        if (flag == null)
            return new ResponseEntity<>(HttpStatus.CONFLICT);

        //add mail
        HttpHeaders header = new HttpHeaders();
        header.setLocation(builder.path("/{prdId}").buildAndExpand(consignment.getConsId()).toUri());

        return  new ResponseEntity<>(header, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Consignment> updateConsignment(@RequestBody Consignment consignment){
        consignmentService.updateConsignment(consignment);
        return  new ResponseEntity<>(consignment,HttpStatus.OK);
    }

    @DeleteMapping("/{consId}")
    public ResponseEntity<Void> deleteConsignment(@PathVariable("consId") Long consId){
        consignmentService.deleteConsignment(consId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}