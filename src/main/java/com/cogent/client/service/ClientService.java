package com.cogent.client.service;

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

    public Client getClientByEmail(String clEmail){
        Client client=clRepository.findByClientEmail(clEmail);
        return client;
    }

    public Client getClientByUsername(String clUsername){
        Client client=clRepository.findByClientUsername(clUsername);
        return client;
    }

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
    public void updateClient(Long clId, Client client){
        Client client1 = clRepository.findById(clId).get();
        client.setClientId(client1.getClientId());
    clRepository.save(client);
    }
    public void deleteClient(Long clId){
        clRepository.deleteById(clId);
    }

}
