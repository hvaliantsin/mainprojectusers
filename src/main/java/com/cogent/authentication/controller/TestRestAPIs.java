package com.cogent.authentication.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TestRestAPIs {
	
	@GetMapping("/test/user")
	@PreAuthorize("hasRole('USER')")
	public String userAccess() {
		return ">>> User Contents!";
	}

	@GetMapping("/test/tc")
	@PreAuthorize("hasRole('TC')")
	public String transportCentreAccess() {
		return ">>> Transport Center Board";
	}

	@GetMapping("/test/client")
	@PreAuthorize("hasRole('CLIENT')")
	public String clientAccess() {
		return ">>> Clients content";
	}

	@GetMapping("/test/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return ">>> Admin Contents";
	}
}