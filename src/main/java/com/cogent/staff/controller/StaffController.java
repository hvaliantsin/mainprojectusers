package com.cogent.staff.controller;

import com.cogent.client.model.Client;
import com.cogent.mailsender.MailSender;
import com.cogent.staff.model.Staff;
import com.cogent.staff.service.StaffService;
import com.cogent.transportcentre.model.TransportCentre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
@CrossOrigin
@RequestMapping("/staff")
@RestController
public class StaffController {
    @Autowired
    private StaffService staffService;
    @Autowired
    private JavaMailSender javaMailSender;


    @GetMapping("/{staffId}")
    public ResponseEntity getStaffById(@PathVariable("staffId") Long staffId){
        Staff staff = staffService.getStaffById(staffId);
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }
    @GetMapping("/username/{sUsername}")
    public ResponseEntity getStaffByUsername(@PathVariable("sUsername") String sUsername){
        Staff staff = staffService.getStaffByUsername(sUsername);
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<Staff>> getAllStaff() {
        List<Staff> list = staffService.getAllStaff();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @GetMapping("/tc/{tcId}")
    public ResponseEntity<List<Staff>> getAllStaffByTC(@PathVariable("tcId") Long tcId) {
        List<Staff> list = staffService.getAllStaffByTcId(tcId);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Void> addStaff(@RequestBody Staff staff, UriComponentsBuilder builder){
        Staff flag=staffService.addStaff(staff);
        if (flag == null)
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        HttpHeaders header = new HttpHeaders();
        header.setLocation(builder.path("/staff/{staffId}").buildAndExpand(staff.getStaffId()).toUri());
        MailSender.sendGreetingMailToStaff(staff, javaMailSender);
        return  new ResponseEntity<>(header, HttpStatus.CREATED);
    }

    @PutMapping("/{staffId}")
    public ResponseEntity<Staff> updateStaff(@PathVariable("staffId") Long staffId,@RequestBody Staff staff){
        staffService.updateStaff(staffId,staff);
        return  new ResponseEntity<>(staff,HttpStatus.OK);
    }

    @DeleteMapping("/{staffId}")
    public ResponseEntity<Void> deleteStaff(@PathVariable("staffId") Long staffId){
        staffService.deleteStaff(staffId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
