package com.cogent.mainprojectusers.users.repository;

import com.cogent.mainprojectusers.users.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractUserRepository<E extends User> extends CrudRepository<E,Long> {
}
