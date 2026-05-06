package taxi_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import taxi_backend.model.Ride;

public interface RideRepository extends JpaRepository<Ride, Long> {

    List<Ride> findByUsername(String username);
}