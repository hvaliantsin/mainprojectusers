package com.cogent.mainprojectusers.users.controller;

import com.cogent.mainprojectusers.users.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

public interface CommonController<E extends User> {
    @GetMapping("/{uId}")
    ResponseEntity<E> getUserById(@PathVariable("uId") Long uId);
    @GetMapping()
    ResponseEntity<List<E>> getAllUsers();
    @PostMapping()
    ResponseEntity<Void> addUser(@RequestBody E entity, UriComponentsBuilder builder);
    @PutMapping()
    ResponseEntity<E> updateUser(@RequestBody E entity);
    @DeleteMapping()
    ResponseEntity<Void> deleteUser(@PathVariable("prdId") Long uId);
}
