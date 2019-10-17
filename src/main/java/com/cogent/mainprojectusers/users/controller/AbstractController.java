package com.cogent.mainprojectusers.users.controller;

import com.cogent.mainprojectusers.users.model.User;
import com.cogent.mainprojectusers.users.repository.AbstractUserRepository;
import com.cogent.mainprojectusers.users.service.AbstractUserService;
import com.cogent.mainprojectusers.users.service.CommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

public abstract class AbstractController<E extends User, S extends CommonService<E>> implements CommonController<E> {
private final S service;

@Autowired
protected AbstractController(S service) {
    this.service = service;
}

    @Override
    public ResponseEntity<E> getUserById(Long uId) {
        E entity = service.getUserById(uId);
        return new ResponseEntity<>(entity, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<E>> getAllUsers() {
        List<E> list=service.getAllUsers();
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Void> addUser(E entity, UriComponentsBuilder builder) {
        E flag=service.addUser(entity);
        if (flag == null)
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        HttpHeaders header = new HttpHeaders();
        header.setLocation(builder.path("/{uId}").buildAndExpand(entity.getUserId()).toUri());
        return new ResponseEntity<>(header, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<E> updateUser(E entity) {
        service.updateUser(entity);
        return  new ResponseEntity<>(entity,HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Void> deleteUser(Long uId) {
        service.deleteUser(uId);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
