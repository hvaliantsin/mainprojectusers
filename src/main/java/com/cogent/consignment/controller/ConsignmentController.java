package com.cogent.consignment.controller;

import com.cogent.client.model.Client;
import com.cogent.client.service.ClientService;
import com.cogent.consignment.model.Consignment;
import com.cogent.consignment.service.ConsignmentService;
import com.cogent.transportcentre.model.TransportCentre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
@CrossOrigin
@RequestMapping("/consignment")
@RestController
public class ConsignmentController {
    @Autowired
    private ConsignmentService consignmentService;

    @GetMapping("/{consId}")
    public ResponseEntity getConsignmentById(@PathVariable("consId") Long consId){
        Consignment consignment = consignmentService.getConsignmentById(consId);
        return new ResponseEntity<>(consignment, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Consignment>> getAllConsignments(){
        List<Consignment> list=consignmentService.getAllConsignment();
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @GetMapping("clientid/{clientId}")
    public ResponseEntity<List<Consignment>> getAllConsignmentsByClientId(@PathVariable("clientId") Long clientId){
        List<Consignment> list=consignmentService.getAllConsignmentByClientId(clientId);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @GetMapping("staff/{staffId}")
    public ResponseEntity<List<Consignment>> getAllConsignmentsByStaff(@PathVariable("staffId") Long staffId){
        List<Consignment> list=consignmentService.getAllConsignmentByStaffId(staffId);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @GetMapping("tc")
    public ResponseEntity<List<Consignment>> getAllConsignmentsByTc(@RequestBody TransportCentre transportCentre){
        List<Consignment> list=consignmentService.getAllConsignmentByTc(transportCentre);
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

    @PutMapping("/{consId}")
    public ResponseEntity<Consignment> updateConsignment(@PathVariable("consId") Long consId, @RequestBody Consignment consignment){
        consignmentService.updateConsignment(consId, consignment);
        return  new ResponseEntity<>(consignment,HttpStatus.OK);
    }

    @DeleteMapping("/{consId}")
    public ResponseEntity<Void> deleteConsignment(@PathVariable("consId") Long consId){
        consignmentService.deleteConsignment(consId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
