package com.cogent.consignment.repository;

import com.cogent.consignment.model.Consignment;
import com.cogent.transportcentre.model.TransportCentre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsignmentRepository extends JpaRepository<Consignment,Long> {
    public List<Consignment> findAllByClient_ClientId(Long clientId);
    public List<Consignment> findAllByStaff(Long staffId);
    public List<Consignment> findAllByTc(TransportCentre transportCentre);
}
