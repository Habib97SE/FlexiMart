package org.fleximart.fleximart.v1.service;

import org.fleximart.fleximart.v1.entity.PaymentMethod;
import org.fleximart.fleximart.v1.repository.PaymentMethodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentMethodService {

    @Autowired
    private PaymentMethodRepository paymentMethodRepository;

    public PaymentMethodService(PaymentMethodRepository paymentMethodRepository) {
        this.paymentMethodRepository = paymentMethodRepository;
    }

    public List<PaymentMethod> findAll() {
        return paymentMethodRepository.findAll();
    }

    public PaymentMethod findById(Long id) {
        return paymentMethodRepository.findById(id).orElse(null);
    }

    public PaymentMethod save(PaymentMethod paymentMethod) {
        return paymentMethodRepository.save(paymentMethod);
    }

    public PaymentMethod update(PaymentMethod paymentMethod) {
        PaymentMethod existingPaymentMethod = paymentMethodRepository.findById(paymentMethod.getId()).orElse(null);
        if (existingPaymentMethod == null) {
            return null;
        }
        existingPaymentMethod = PaymentMethod.builder()
                .id(paymentMethod.getId())
                .name(paymentMethod.getName())
                .description(paymentMethod.getDescription())
                .active(paymentMethod.getActive())
                .logo(paymentMethod.getLogo())
                .website(paymentMethod.getWebsite())
                .emailAddress(paymentMethod.getEmailAddress())
                .phoneNumber(paymentMethod.getPhoneNumber())
                .createdAt(existingPaymentMethod.getCreatedAt())
                .build();
        return paymentMethodRepository.save(existingPaymentMethod);
    }

    public void delete(Long id) {
        paymentMethodRepository.deleteById(id);
    }

}
