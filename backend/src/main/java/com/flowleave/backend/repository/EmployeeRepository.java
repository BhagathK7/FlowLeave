package com.flowleave.backend.repository;

import com.flowleave.backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findByEmail(String email);

    Optional<Employee> findByEmailAndPassword(
            String email,
            String password);

}