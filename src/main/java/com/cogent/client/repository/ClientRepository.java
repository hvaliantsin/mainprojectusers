package com.cogent.client.repository;

import com.cogent.client.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
    public Client findByClientEmail(String email);
    public Client findByClientUsername(String username);
}
