package com.cogent.staff.repository;

import com.cogent.staff.model.Staff;
import com.cogent.transportcentre.model.TransportCentre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffRepository extends JpaRepository<Staff,Long> {
    public Staff findByStaffUsername(String username);
    public List<Staff> findAllByTc(TransportCentre transportCentre);
}
