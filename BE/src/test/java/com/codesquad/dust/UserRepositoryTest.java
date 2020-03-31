package com.codesquad.dust;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserRepositoryTest {

    private Logger logger = LoggerFactory.getLogger(UserRepositoryTest.class);

    @Autowired
    private UserRepository userRepository;

    @Test
    void setUpUserRepositoryTest() {
        User user = userRepository.findById(1L).orElseThrow(() -> new IllegalStateException("No User"));
        logger.info("user : {}", user);
    }
}
