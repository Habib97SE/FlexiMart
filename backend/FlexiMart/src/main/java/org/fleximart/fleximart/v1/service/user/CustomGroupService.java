package org.fleximart.fleximart.v1.service.user;

import org.fleximart.fleximart.v1.repository.user.CustomGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomGroupService {

    @Autowired
    private CustomGroupRepository customGroupRepository;

    public CustomGroupService(CustomGroupRepository customGroupRepository) {
        this.customGroupRepository = customGroupRepository;
    }
}
