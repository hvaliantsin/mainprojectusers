package com.cogent.mailsender;

import com.cogent.client.model.Client;
import com.cogent.consignment.model.Consignment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@CrossOrigin
@RequestMapping("/mail")
@RestController
public class MailController {
@Autowired
    JavaMailSender javaMailSender;
    @PostMapping("/complain")
    public ResponseEntity<Void> sendComplain(@RequestBody Client client){
        MailSender.sendComplain(client, javaMailSender);
        return  new ResponseEntity<>( HttpStatus.OK);
    }
}
