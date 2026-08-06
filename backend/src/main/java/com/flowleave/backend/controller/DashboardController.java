package com.flowleave.backend.controller;

import com.flowleave.backend.repository.DepartmentRepository;
import com.flowleave.backend.repository.EmployeeRepository;
import com.flowleave.backend.repository.LeaveRequestRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;
    private final LeaveRequestRepository leaveRequestRepository;

    public DashboardController(
            EmployeeRepository employeeRepository,
            DepartmentRepository departmentRepository,
            LeaveRequestRepository leaveRequestRepository) {

        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
        this.leaveRequestRepository = leaveRequestRepository;
    }

    @GetMapping("/admin")
    public Map<String, Object> adminDashboard() {

        Map<String, Object> dashboard = new HashMap<>();

        dashboard.put("employees", employeeRepository.count());
        dashboard.put("departments", departmentRepository.count());
        dashboard.put("leaveRequests", leaveRequestRepository.count());

        return dashboard;
    }
}