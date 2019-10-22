package com.cogent.consignment.repository;

import com.cogent.consignment.model.Consignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsignmentRepository extends JpaRepository<Consignment,Long> {
}
