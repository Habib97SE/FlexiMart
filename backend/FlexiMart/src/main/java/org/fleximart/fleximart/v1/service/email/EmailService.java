package org.fleximart.fleximart.v1.service.email;

import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.AddressException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.sendgrid.*;

@Service
public class EmailService {



    public void sendEmail () {
        Email from = new Email("habib@tidstrend.se");
        String subject = "Sending with SendGrid is Fun";
        Email to = new Email("hezarehee.h@gmail.com");
        Content content = new Content("text/plain", "and easy to do anywhere, even with Java");
        Mail mail = new Mail(from, subject, to, content);
        SendGrid sendGrid = new SendGrid("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");
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sendGrid.api(request);
            System.err.println(response.getStatusCode());
            System.err.println(response.getBody());
            System.err.println(response.getHeaders());
            System.err.println("Email sent successfully");
        } catch (Exception ex) {
            ex.printStackTrace();
            System.err.println("Error sending email");
        }
    }
}
