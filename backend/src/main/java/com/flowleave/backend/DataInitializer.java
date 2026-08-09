package com.flowleave.backend;

import com.flowleave.backend.entity.Department;
import com.flowleave.backend.entity.Employee;
import com.flowleave.backend.enums.Role;
import com.flowleave.backend.repository.DepartmentRepository;
import com.flowleave.backend.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataInitializer implements CommandLineRunner {

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(
            EmployeeRepository employeeRepository,
            DepartmentRepository departmentRepository,
            PasswordEncoder passwordEncoder) {

        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {

        // Create the default Admin account only if it doesn't already exist
        if (!employeeRepository.existsByEmail("admin@flowleave.com")) {

            Department itDepartment = departmentRepository.findById(1L)
                    .orElse(null);

            Employee admin = new Employee();

            admin.setEmployeeCode("ADM001");
            admin.setFirstName("System");
            admin.setLastName("Admin");
            admin.setEmail("admin@flowleave.com");

            // Store the password as a BCrypt hash
            admin.setPassword(
                    passwordEncoder.encode("admin123")
            );

            admin.setDesignation("System Administrator");
            admin.setJoiningDate(LocalDate.now());
            admin.setRole(Role.ADMIN);
            admin.setDepartment(itDepartment);

            employeeRepository.save(admin);

            System.out.println("==========================================");
            System.out.println("Default Admin account created.");
            System.out.println("Email: admin@flowleave.com");
            System.out.println("Password: admin123");
            System.out.println("==========================================");
        }
    }
}