package taxi_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import taxi_backend.model.User;
import taxi_backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    private static final Logger log =
            LoggerFactory.getLogger(UserService.class);

    // REGISTER
    public User register(User user) {

        return userRepository.save(user);
    }

    // LOGIN CHECK
    public User login(User user) {

        User existingUser =
                userRepository.findByEmail(user.getEmail());
        log.info("Existing user: {}", existingUser);

        if(existingUser != null &&
           existingUser.getPassword().equals(user.getPassword())) {

            return existingUser;
        }

        return null;
    }
}