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

    public TransportCentre getTransportCentreById(Long tcId){
        TransportCentre prd=tcRepository.findById(tcId).get();
        return prd;
    }

    public List<TransportCentre> getAllTransportCentres(){
        List<TransportCentre> list = new ArrayList<>();
        tcRepository.findAll().forEach(e->list.add(e));
        return list;
    }
    public TransportCentre addTransportCentre(TransportCentre tc){
        TransportCentre list = tcRepository.save(tc);
        return list;
    }
    public void updateTransportCentre(Long tcId, TransportCentre tc){
        TransportCentre tc1 = tcRepository.findById(tcId).get();
        tc.setTcId(tc1.getTcId());
        //tc1.setConsignments(tc.getConsignments());
        //tc1.setStaffSet(tc.getStaffSet());
        //tc1.setTcAddress(tc.getTcAddress());
        //tc1.setTcEmail(tc.getTcEmail());
        //tc1.setTcName(tc.getTcName());
        //tc1.setTcPhoneNumber(tc.getTcPhoneNumber());
        tcRepository.save(tc);
    }
    public void deleteTransportCentre(Long tcId){
        tcRepository.deleteById(tcId);
    }

}