package taxi_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import taxi_backend.model.Ride;
import taxi_backend.repository.RideRepository;

@Service
public class RideService {

    @Autowired
    private RideRepository rideRepository;

    // SAVE RIDE
    public Ride saveRide(Ride ride) {

        return rideRepository.save(ride);
    }

    // GET USER RIDES
    public List<Ride> getUserRides(String username) {

        return rideRepository.findByUsername(username);
    }
}