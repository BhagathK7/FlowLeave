package com.flowleave.backend.repository;

import com.flowleave.backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findByEmail(String email);

    Optional<Employee> findByEmployeeCode(String employeeCode);

    Optional<Employee> findByEmailAndPassword(String email, String password);

    boolean existsByEmail(String email);

    boolean existsByEmployeeCode(String employeeCode);
}