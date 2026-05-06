package taxi_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import taxi_backend.model.Ride;
import taxi_backend.service.RideService;

@RestController
@RequestMapping("/rides")
@CrossOrigin(origins = "http://localhost:3000")
public class RideController {

    @Autowired
    private RideService rideService;

    // SAVE RIDE
    @PostMapping("/save")
    public Ride saveRide(@RequestBody Ride ride) {

        return rideService.saveRide(ride);
    }

    // GET USER RIDES
    @GetMapping("/{username}")
    public List<Ride> getUserRides(
            @PathVariable String username) {

        return rideService.getUserRides(username);
    }
}