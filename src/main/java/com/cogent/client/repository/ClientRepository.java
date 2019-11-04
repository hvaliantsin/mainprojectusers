package com.cogent.client.repository;

import com.cogent.client.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
<<<<<<< HEAD
    public Client findByClientEmail(String email);
    public Client findByUser_Username(String username);

=======
>>>>>>> parent of 743b7746... register client
}
