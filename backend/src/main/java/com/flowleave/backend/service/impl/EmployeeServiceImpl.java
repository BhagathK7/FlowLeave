package com.flowleave.backend.service.impl;

import com.flowleave.backend.entity.Employee;
import com.flowleave.backend.entity.LeaveBalance;
import com.flowleave.backend.repository.EmployeeRepository;
import com.flowleave.backend.repository.LeaveBalanceRepository;
import com.flowleave.backend.service.EmployeeService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final LeaveBalanceRepository leaveBalanceRepository;
    private final PasswordEncoder passwordEncoder;

    public EmployeeServiceImpl(
            EmployeeRepository employeeRepository,
            LeaveBalanceRepository leaveBalanceRepository,
            PasswordEncoder passwordEncoder) {

        this.employeeRepository = employeeRepository;
        this.leaveBalanceRepository = leaveBalanceRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public Employee saveEmployee(Employee employee) {

        // Hash the password before storing it in the database
        if (employee.getPassword() != null && !employee.getPassword().isBlank()) {
            employee.setPassword(
                    passwordEncoder.encode(employee.getPassword())
            );
        }

        Employee saved = employeeRepository.save(employee);

        LeaveBalance balance = new LeaveBalance();
        balance.setEmployee(saved);

        leaveBalanceRepository.save(balance);

        return saved;
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Employee updateEmployee(Long id, Employee employee) {

        Employee existing = employeeRepository.findById(id).orElse(null);

        if (existing == null) {
            return null;
        }

        existing.setEmployeeCode(employee.getEmployeeCode());
        existing.setFirstName(employee.getFirstName());
        existing.setLastName(employee.getLastName());
        existing.setEmail(employee.getEmail());
        existing.setDesignation(employee.getDesignation());
        existing.setJoiningDate(employee.getJoiningDate());
        existing.setRole(employee.getRole());
        existing.setDepartment(employee.getDepartment());

        // Only change the password when a new password was provided
        if (employee.getPassword() != null
                && !employee.getPassword().isBlank()) {

            existing.setPassword(
                    passwordEncoder.encode(employee.getPassword())
            );
        }

        return employeeRepository.save(existing);
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
