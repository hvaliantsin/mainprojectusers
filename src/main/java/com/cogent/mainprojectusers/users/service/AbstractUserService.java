package com.cogent.mainprojectusers.users.service;

import com.cogent.mainprojectusers.users.model.User;
import com.cogent.mainprojectusers.users.repository.AbstractUserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public abstract class AbstractUserService<E extends User, R extends AbstractUserRepository<E>> {

    protected final R repository;

    @Autowired
    public AbstractUserService(R repository) {
       this.repository=repository;
    }


    public E getProductById(Long id){
        E someUser=repository.findById(id).get();
        return someUser;
    }

    public List<E> getAllProducts(){
        List<E> list = new ArrayList<>();
        repository.findAll().forEach(e->list.add(e));
        return list;
    }
    public E addProduct(E someUser){
        E list = repository.save(someUser);
        return list;
    }
    public void updateProduct(E someUser){
        repository.save(someUser);
    }
    public void deleteProduct(Long id){
        repository.deleteById(id);
    }
}
