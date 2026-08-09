package com.flowleave.backend.controller;

import com.flowleave.backend.entity.LeaveRequest;
import com.flowleave.backend.enums.LeaveStatus;
import com.flowleave.backend.repository.DepartmentRepository;
import com.flowleave.backend.repository.EmployeeRepository;
import com.flowleave.backend.repository.LeaveRequestRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")

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
    @Transactional(readOnly = true)
    public Map<String, Object> adminDashboard() {

        Map<String, Object> dashboard = new HashMap<>();

        dashboard.put("employees", employeeRepository.count());
        dashboard.put("departments", departmentRepository.count());
        dashboard.put("pendingLeaves", leaveRequestRepository.countByStatus(LeaveStatus.PENDING));
        dashboard.put("approvedLeaves", leaveRequestRepository.countByStatus(LeaveStatus.APPROVED));

        List<Map<String, Object>> recentLeaves = new ArrayList<>();

        for (LeaveRequest leave : leaveRequestRepository.findTop5ByOrderByAppliedDateDesc()) {

            Map<String, Object> item = new HashMap<>();

            item.put("employee", leave.getEmployee().getFirstName() + " " + leave.getEmployee().getLastName());
            item.put("type", leave.getLeaveType().name());
            item.put("status", leave.getStatus().name());

            recentLeaves.add(item);
        }

        dashboard.put("recentLeaves", recentLeaves);

        return dashboard;
    }
}