package com.cogent.transportcentre.controller;

import com.cogent.transportcentre.model.TransportCentre;
import com.cogent.transportcentre.service.TransportCentreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
@RequestMapping("/transportcentre")
@RestController
public class TransportCentreController {
    @Autowired
    private TransportCentreService tcService;

    @GetMapping("/{prdId}")
    public ResponseEntity getTransportCentreById(@PathVariable("prdId") Long prdId){
        TransportCentre prd = tcService.getTransportCentreById(prdId);
        return new ResponseEntity<TransportCentre>(prd, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<TransportCentre>> getAllTransportCentres(){
        List<TransportCentre> list=tcService.getAllTransportCentres();
        return new ResponseEntity<List<TransportCentre>>(list,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> addProduct(@RequestBody TransportCentre transportCentre, UriComponentsBuilder builder){
        TransportCentre flag=tcService.addTransportCentre(transportCentre);
        if (flag == null)
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        HttpHeaders header = new HttpHeaders();
        header.setLocation(builder.path("/product/{prdId}").buildAndExpand(transportCentre.getTcId()).toUri());
        return  new ResponseEntity<Void>(header, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<TransportCentre> updateTransportCentre(@RequestBody TransportCentre transportCentre){
        tcService.updateTransportCentre(transportCentre);
        return  new ResponseEntity<TransportCentre>(transportCentre,HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteTransportCentre(@PathVariable("prdId") Long prdId){
        tcService.deleteTransportCentre(prdId);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

}
