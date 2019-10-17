package com.cogent.mainprojectusers.users.controller;

import com.cogent.mainprojectusers.users.model.BranchTransportCenter;
import com.cogent.mainprojectusers.users.service.BranchTransportCenterService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/branch")
public class BranchTransportCenterController extends AbstractController<BranchTransportCenter, BranchTransportCenterService> {
    protected BranchTransportCenterController(BranchTransportCenterService service) {
        super(service);
    }
}
