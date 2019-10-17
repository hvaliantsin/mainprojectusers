package com.cogent.transportcentre.repository;

import com.cogent.transportcentre.model.TransportCentre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransportCentreRepository extends JpaRepository<TransportCentre,Long> {
}
