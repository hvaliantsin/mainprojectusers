package com.cogent.transportcentre.service;

import com.cogent.transportcentre.model.TransportCentre;
import com.cogent.transportcentre.repository.TransportCentreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransportCentreService {
    @Autowired
    private TransportCentreRepository tcRepository;

    public TransportCentre getTransportCentreById(Long prdId){
        TransportCentre prd=tcRepository.findById(prdId).get();
        return prd;
    }

    public List<TransportCentre> getAllTransportCentres(){
        List<TransportCentre> list = new ArrayList<>();
        tcRepository.findAll().forEach(e->list.add(e));
        return list;
    }
    public TransportCentre addTransportCentre(TransportCentre prd){
        TransportCentre list = tcRepository.save(prd);
        return list;
    }
    public void updateTransportCentre(TransportCentre prd){
        tcRepository.save(prd);
    }
    public void deleteTransportCentre(Long prdId){
        tcRepository.deleteById(prdId);
    }

}