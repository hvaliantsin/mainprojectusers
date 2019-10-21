package com.cogent.mailsender;

import com.cogent.staff.model.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class MailSender {
    @Autowired
    private static JavaMailSender javaMailSender;

    public static void sendGreetingMailToStaff(Staff staff){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(staff.getEmail());
        msg.setSubject("Welcome to the system, "+staff.getStaffName());
        msg.setText("Welcome to Spring Boot Email\n Here is your account:\nYour Name: "+staff.getStaffName()+"\nYour Role: "+staff.getRole()
        +"\nYour income: "+ (staff.getBaseSalary()+staff.getHouseRateAllowance()+staff.getTuitionAssistance()+staff.getIncentive()));

        javaMailSender.send(msg);
    }
}
