package com.flowleave.backend.controller;

import com.flowleave.backend.entity.LeaveRequest;
import com.flowleave.backend.repository.LeaveRequestRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportController {

    private final LeaveRequestRepository leaveRequestRepository;

    public ReportController(LeaveRequestRepository leaveRequestRepository) {
        this.leaveRequestRepository = leaveRequestRepository;
    }

    @GetMapping("/leaves")
    public List<LeaveRequest> getLeaveReport() {
        return leaveRequestRepository.findAll();
    }
}