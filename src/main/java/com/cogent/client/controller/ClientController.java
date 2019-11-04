package com.cogent.client.controller;

import com.cogent.authentication.model.User;
import com.cogent.authentication.repository.UserRepository;
import com.cogent.authentication.security.services.UserDetailsServiceImpl;
import com.cogent.client.model.Client;
import com.cogent.client.service.ClientService;
import com.cogent.logging.LoggingController;
import com.cogent.transportcentre.model.TransportCentre;
import com.cogent.transportcentre.service.TransportCentreService;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
@CrossOrigin
@RequestMapping("/client")
@RestController
public class ClientController {
    @Autowired
    private ClientService clientService;
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/{clId}")
    public ResponseEntity getClientById(@PathVariable("clId") Long prdId){
        Client client = clientService.getClientById(prdId);
        return new ResponseEntity<>(client, HttpStatus.OK);
    }

    @GetMapping("/email/{clEmail}")
    public ResponseEntity getClientByEmail(@PathVariable("clEmail") String clEmail){
        Client client = clientService.getClientByEmail(clEmail);
        return new ResponseEntity<>(client, HttpStatus.OK);
    }

    @GetMapping("/username/{clUsername}")
    public ResponseEntity getClientByUsername(@PathVariable("clUsername") String clUsername){
        Client client = clientService.getClientByUsername(clUsername);
        Logger logger = LogManager.getLogger(ClientController.class);
        logger.debug("client");
        ResponseEntity responseEntity = new ResponseEntity(client, HttpStatus.OK);
        logger.debug("responseEntity");
        return responseEntity;
    }

    @GetMapping
    public ResponseEntity<List<Client>> getAllTransportCentres(){
        List<Client> list=clientService.getAllClients();
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> addClient(@RequestBody Client client, @RequestBody String username, UriComponentsBuilder builder){
        Client flag= new Client(client.getClientName(),client.getClientEmail(),client.getClientPhoneNumber(),client.getClientAddress(),new User());
                User user = userRepository.findByUsername(username).get();
                flag.setUser(user);
                clientService.addClient(flag);
        if (flag == null)
            return new ResponseEntity<>(HttpStatus.CONFLICT);

        //add mail
        HttpHeaders header = new HttpHeaders();
        header.setLocation(builder.path("/{clId}").buildAndExpand(client.getClientId()).toUri());

        return  new ResponseEntity<>(header, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Client> updateClient(@RequestBody Client client){
        clientService.updateClient(client);
        return  new ResponseEntity<>(client,HttpStatus.OK);
    }

    @DeleteMapping("/{clId}")
    public ResponseEntity<Void> deleteClient(@PathVariable("clId") Long clId){
        clientService.deleteClient(clId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
