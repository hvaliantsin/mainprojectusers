package com.cogent.mainprojectusers.users.service;

import com.cogent.mainprojectusers.users.model.User;

import java.util.List;

public interface CommonService<E extends User> {
    E getUserById(Long id);
    List<E> getAllUsers();
    E addUser(E entity);
    void updateUser(E entity);
    void deleteUser(Long id);
}
