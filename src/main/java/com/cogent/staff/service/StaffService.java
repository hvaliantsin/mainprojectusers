package com.cogent.staff.service;

import com.cogent.staff.model.Staff;
import com.cogent.staff.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class StaffService {
    @Autowired
    private StaffRepository sRepository;

    public List<Staff> getStaffById(Long sId){
        List<Staff> list = new ArrayList<>();
        list.add(sRepository.findById(sId).get());
        return list;
    }

    public List<Staff> getAllStaff(){
        List<Staff> list = new ArrayList<>();
        sRepository.findAll().forEach(e->list.add(e));
        return list;
    }
    public Staff addStaff(Staff staff){
        Staff list = sRepository.save(staff);
        return list;
    }
    public void updateStaff(Staff staff){
        sRepository.save(staff);
    }
    public void deleteStaff(Long sId){
        sRepository.deleteById(sId);
    }
}
