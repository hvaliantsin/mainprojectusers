package com.cogent.mainprojectusers.users.service;

import com.cogent.mainprojectusers.users.model.BranchTransportCenter;
import com.cogent.mainprojectusers.users.repository.BranchTransportCenterRepository;
import org.springframework.stereotype.Service;

@Service
public class BranchTransportCenterService extends AbstractUserService<BranchTransportCenter, BranchTransportCenterRepository> {
    public BranchTransportCenterService(BranchTransportCenterRepository repository) {
        super(repository);
    }
}
