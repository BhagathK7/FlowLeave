package com.flowleave.backend.controller;

import com.flowleave.backend.entity.LeaveRequest;
import com.flowleave.backend.enums.LeaveStatus;
import com.flowleave.backend.service.LeaveRequestService;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaves")
@CrossOrigin(origins = "http://localhost:5173")
public class LeaveRequestController {

    private final LeaveRequestService leaveRequestService;

    public LeaveRequestController(LeaveRequestService leaveRequestService) {
        this.leaveRequestService = leaveRequestService;
    }

    @PostMapping("/apply")
    public LeaveRequest applyLeave(@RequestBody LeaveRequest leaveRequest) {
        return leaveRequestService.applyLeave(leaveRequest);
    }

    @GetMapping
    @Transactional(readOnly = true)
    public List<LeaveRequest> getAllLeaves() {
        return leaveRequestService.getAllLeaves();
    }

    @GetMapping("/status/{status}")
    @Transactional(readOnly = true)
    public List<LeaveRequest> getLeavesByStatus(@PathVariable LeaveStatus status) {
        return leaveRequestService.getLeavesByStatus(status);
    }

    @GetMapping("/{id}")
    public LeaveRequest getLeave(@PathVariable Long id) {
        return leaveRequestService.getLeaveById(id);
    }

    @GetMapping("/employee/{employeeId}")
    @Transactional(readOnly = true)
    public List<LeaveRequest> getEmployeeLeaveHistory(@PathVariable Long employeeId) {
        return leaveRequestService.getEmployeeLeaveHistory(employeeId);
    }

    @PutMapping("/{id}/approve")
    public LeaveRequest approveLeave(@PathVariable Long id) {
        return leaveRequestService.approveLeave(id);
    }

    @PutMapping("/{id}/reject")
    public LeaveRequest rejectLeave(
            @PathVariable Long id,
            @RequestParam String remarks) {

        return leaveRequestService.rejectLeave(id, remarks);
    }

    @PutMapping("/{id}/cancel")
    public LeaveRequest cancelLeave(@PathVariable Long id) {
        return leaveRequestService.cancelLeave(id);
    }

    @DeleteMapping("/{id}")
    public void deleteLeave(@PathVariable Long id) {
        leaveRequestService.deleteLeave(id);
    }
}