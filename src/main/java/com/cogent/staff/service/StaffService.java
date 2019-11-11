package com.cogent.staff.service;

import com.cogent.client.model.Client;
import com.cogent.staff.model.Staff;
import com.cogent.staff.repository.StaffRepository;
import com.cogent.transportcentre.model.TransportCentre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class StaffService {
    @Autowired
    private StaffRepository sRepository;

    public Staff getStaffById(Long sId){
        Staff staff = sRepository.findById(sId).get();
        return staff;
    }
    public Staff getStaffByUsername(String sUsername){
        Staff staff=sRepository.findByStaffUsername(sUsername);
        return staff;
    }
    public List<Staff> getAllStaff(){
        List<Staff> list = new ArrayList<>();
        sRepository.findAll().forEach(e->list.add(e));
        return list;
    }
    public List<Staff> getAllStaffByTC(TransportCentre tc){
        List<Staff> list = sRepository.findAllByTc(tc);
        return list;
    }
    public List<Staff> getAllStaffByTcId(Long tcId){
        List<Staff> list = sRepository.findAllByTc_TcId(tcId);
        return list;
    }
    public Staff addStaff(Staff staff){
        Staff list = sRepository.save(staff);
        return list;
    }
    public void updateStaff(Long staffId, Staff staff){
        Staff staff1 = sRepository.findById(staffId).get();
        staff.setStaffId(staff1.getStaffId());
        sRepository.save(staff);
    }
    public void deleteStaff(Long sId){
        sRepository.deleteById(sId);
    }
}
