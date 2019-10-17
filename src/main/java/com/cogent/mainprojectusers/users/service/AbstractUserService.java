package com.cogent.mainprojectusers.users.service;

import com.cogent.mainprojectusers.users.model.User;
import com.cogent.mainprojectusers.users.repository.AbstractUserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public abstract class AbstractUserService<E extends User, R extends AbstractUserRepository<E>> implements CommonService<E>{

    protected final R repository;

    @Autowired
    public AbstractUserService(R repository) {
       this.repository=repository;
    }


    public E getUserById(Long id){
        E someUser=repository.findById(id).get();
        return someUser;
    }

    public List<E> getAllUsers(){
        List<E> list = new ArrayList<>();
        repository.findAll().forEach(e->list.add(e));
        return list;
    }
    public E addUser(E someUser){
        E list = repository.save(someUser);
        return list;
    }
    public void updateUser(E someUser){
        repository.save(someUser);

    }
    public void deleteUser(Long id){
        repository.deleteById(id);
    }
}
