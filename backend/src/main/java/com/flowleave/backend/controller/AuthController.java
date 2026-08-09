package com.flowleave.backend.controller;

import com.flowleave.backend.entity.Employee;
import com.flowleave.backend.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")

public class AuthController {

    private final EmployeeRepository employeeRepository;

    public AuthController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/login")
    public Employee login(@RequestBody Employee employee) {

        return employeeRepository
                .findByEmailAndPassword(
                        employee.getEmail(),
                        employee.getPassword())
                .orElse(null);
    }
}