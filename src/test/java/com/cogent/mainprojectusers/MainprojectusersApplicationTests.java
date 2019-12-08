package com.cogent.mainprojectusers;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import java.net.URI;
import java.net.URISyntaxException;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MainprojectusersApplicationTests {
    @Autowired
    private WebApplicationContext ctx;

    private MockMvc mockMvc;
    @Before
    public void setup(){
        mockMvc= MockMvcBuilders.webAppContextSetup(ctx).build();
    }
    @Test
    public void staffGet(){
        try {
            mockMvc.perform(get("/staff/1").contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("staffId").value(1))
                    .andExpect(jsonPath("staffName").value("manager"))
                    .andExpect(jsonPath("baseSalary").value(5000));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Test
    public void testGetStaffSuccess() throws URISyntaxException {
        RestTemplate restTemplate = new RestTemplate();
        final String baseUrl="http://localhost:8081/staff/1";
        URI uri = new URI(baseUrl);
        ResponseEntity<String> result = restTemplate.getForEntity(uri,String.class);
        //check weather request succeed or not
        Assert.assertEquals(200,result.getStatusCodeValue());
        Assert.assertEquals(true,result.getBody().contains("houseRateAllowance"));
    }

    @Test
    public void testGetConsignmentSuccess() throws URISyntaxException {
        RestTemplate restTemplate = new RestTemplate();
        final String baseUrl="http://localhost:8081/consignment/1";
        URI uri = new URI(baseUrl);
        ResponseEntity<String> result = restTemplate.getForEntity(uri,String.class);
        //check weather request succeed or not
        Assert.assertEquals(200,result.getStatusCodeValue());
        Assert.assertEquals(true,result.getBody().contains(""));
    }


}
