package com.cogent.mainprojectusers.users.service;

import com.cogent.mainprojectusers.users.model.Role;
import com.cogent.mainprojectusers.users.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public Role getRoleById(Long roleId){
        Role role=roleRepository.findById(roleId).get();
        return role;
    }

    public List<Role> getAllRoles(){
        List<Role> list = new ArrayList<>();
        roleRepository.findAll().forEach(e->list.add(e));
        return list;
    }
    public Role addRole(Role role){
        Role role1 = roleRepository.save(role);
        return role1;
    }
    public void updateRole(Role role){
        roleRepository.save(role);
    }
    public void deleteRole(Long roleId){
        roleRepository.deleteById(roleId);
    }
}
