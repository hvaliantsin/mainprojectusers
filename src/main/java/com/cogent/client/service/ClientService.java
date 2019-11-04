package com.cogent.client.service;

import com.cogent.authentication.model.User;
import com.cogent.authentication.repository.UserRepository;
import com.cogent.client.model.Client;
import com.cogent.client.repository.ClientRepository;
import com.cogent.transportcentre.model.TransportCentre;
import com.cogent.transportcentre.repository.TransportCentreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clRepository;

<<<<<<< HEAD
<<<<<<< HEAD
    @Autowired
    private UserRepository userRepository;

    public Client getClientByEmail(String clEmail){
        Client client=clRepository.findByClientEmail(clEmail);
        return client;
    }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    public Client getClientByUsername(String clUsername){
        Client client=clRepository.findByUser_Username(clUsername);
        return client;
    }

=======
>>>>>>> parent of 743b7746... register client
=======
>>>>>>> parent of 743b7746... register client
    public Client getClientById(Long clId){
        Client client=clRepository.findById(clId).get();
        return client;
    }

    public List<Client> getAllClients(){
        List<Client> list = new ArrayList<>();
        clRepository.findAll().forEach(e->list.add(e));
        return list;
    }
    public Client addClient(Client client){
        Client list = clRepository.save(client);
        return list;
    }
    public Client addClient(Client client, String username){
        Client list = clRepository.save(client);
        list.setUser(userRepository.findByUsername(username).get());
        return list;
    }

    public void updateClient(Client client){
        clRepository.save(client);
    }
    public void deleteClient(Long clId){
        clRepository.deleteById(clId);
    }

}
