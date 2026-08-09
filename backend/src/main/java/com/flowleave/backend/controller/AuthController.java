```java
        package com.flowleave.backend.controller;

import com.flowleave.backend.entity.Employee;
import com.flowleave.backend.repository.EmployeeRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(
            EmployeeRepository employeeRepository,
            PasswordEncoder passwordEncoder) {

        this.employeeRepository = employeeRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public Employee login(@RequestBody Employee employee) {

        Employee existingEmployee = employeeRepository
                .findByEmail(employee.getEmail())
                .orElse(null);

        if (existingEmployee == null) {
            return null;
        }

        boolean passwordMatches = passwordEncoder.matches(
                employee.getPassword(),
                existingEmployee.getPassword()
        );

        if (!passwordMatches) {
            return null;
        }

        return existingEmployee;
    }
}
```
