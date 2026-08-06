package com.flowleave.backend.controller;

import com.flowleave.backend.entity.LeaveRequest;
import com.flowleave.backend.service.LeaveRequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaves")
public class LeaveRequestController {

    private final LeaveRequestService leaveRequestService;

    public LeaveRequestController(LeaveRequestService leaveRequestService) {
        this.leaveRequestService = leaveRequestService;
    }

    @PostMapping
    public LeaveRequest applyLeave(@RequestBody LeaveRequest leaveRequest) {
        return leaveRequestService.applyLeave(leaveRequest);
    }

    @GetMapping
    public List<LeaveRequest> getAllLeaves() {
        return leaveRequestService.getAllLeaves();
    }

    @GetMapping("/{id}")
    public LeaveRequest getLeaveById(@PathVariable Long id) {
        return leaveRequestService.getLeaveById(id);
    }

    @PutMapping("/{id}")
    public LeaveRequest updateLeaveStatus(
            @PathVariable Long id,
            @RequestBody LeaveRequest leaveRequest) {

        return leaveRequestService.updateLeaveStatus(id, leaveRequest);
    }

    @DeleteMapping("/{id}")
    public void deleteLeave(@PathVariable Long id) {
        leaveRequestService.deleteLeave(id);
    }
}