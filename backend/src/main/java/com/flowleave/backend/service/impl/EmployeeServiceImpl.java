package com.flowleave.backend.service.impl;

import com.flowleave.backend.entity.Employee;
import com.flowleave.backend.entity.LeaveBalance;
import com.flowleave.backend.repository.EmployeeRepository;
import com.flowleave.backend.repository.LeaveBalanceRepository;
import com.flowleave.backend.service.EmployeeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final LeaveBalanceRepository leaveBalanceRepository;

    public EmployeeServiceImpl(
            EmployeeRepository employeeRepository,
            LeaveBalanceRepository leaveBalanceRepository) {

        this.employeeRepository = employeeRepository;
        this.leaveBalanceRepository = leaveBalanceRepository;
    }

    @Override
    @Transactional
    public Employee saveEmployee(Employee employee) {

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
    public Employee updateEmployee(Long id, Employee employee) {

        Employee existing = employeeRepository.findById(id).orElse(null);

        if (existing == null) {
            return null;
        }

        existing.setEmployeeCode(employee.getEmployeeCode());
        existing.setFirstName(employee.getFirstName());
        existing.setLastName(employee.getLastName());
        existing.setEmail(employee.getEmail());
        existing.setPassword(employee.getPassword());
        existing.setDesignation(employee.getDesignation());
        existing.setJoiningDate(employee.getJoiningDate());
        existing.setRole(employee.getRole());
        existing.setDepartment(employee.getDepartment());

        return employeeRepository.save(existing);
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}