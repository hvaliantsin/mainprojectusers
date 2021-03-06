package com.cogent.mailsender;

import com.cogent.client.model.Client;
import com.cogent.staff.model.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class MailSender {

    public static void sendGreetingMailToStaff(Staff staff, JavaMailSender javaMailSender){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("Admin");
        msg.setTo(staff.getEmail());
        msg.setSubject("Welcome to the system, "+staff.getStaffName());
        msg.setText("Welcome to Spring Boot Email\n Here is your account:\nYour Name: "+staff.getStaffName()+"\nYour Role: "+staff.getRole()
        +"\nYour id: "+ staff.getStaffId()+"\n Your department: "+staff.getTc().getTcName());

        javaMailSender.send(msg);
    }

    public static void sendComplain(Client client, JavaMailSender javaMailSender){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(client.getClientEmail());
        msg.setTo("Admin");
        msg.setSubject("Complain from "+client.getClientName());
        msg.setText("I have a complain, please contact me");

        javaMailSender.send(msg);
    }
}
