package com.cogent.consignment.service;

import com.cogent.client.model.Client;
import com.cogent.client.repository.ClientRepository;
import com.cogent.consignment.model.Consignment;
import com.cogent.consignment.repository.ConsignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ConsignmentService {
    @Autowired
    private ConsignmentRepository consRepository;

    public Consignment getConsignmentById(Long consId){
        Consignment consignment=consRepository.findById(consId).get();
        return consignment;
    }

    public List<Consignment> getAllConsignment(){
        List<Consignment> list = new ArrayList<>();
        consRepository.findAll().forEach(e->list.add(e));
        return list;
    }
    public Consignment addConsignment(Consignment consignment){
        Consignment consignment1 = consRepository.save(consignment);
        return consignment1;
    }
    public void updateConsignment(Consignment consignment){
        consRepository.save(consignment);
    }
    public void deleteConsignment(Long consId){
        consRepository.deleteById(consId);
    }

}
