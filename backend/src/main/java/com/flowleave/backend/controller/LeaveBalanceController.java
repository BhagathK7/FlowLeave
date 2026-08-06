package com.flowleave.backend.controller;

import com.flowleave.backend.entity.LeaveBalance;
import com.flowleave.backend.service.LeaveBalanceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/leave-balances")
@CrossOrigin(origins = "http://localhost:5173")
public class LeaveBalanceController {

    private final LeaveBalanceService leaveBalanceService;

    public LeaveBalanceController(LeaveBalanceService leaveBalanceService) {
        this.leaveBalanceService = leaveBalanceService;
    }

    @PostMapping
    public LeaveBalance createLeaveBalance(@RequestBody LeaveBalance leaveBalance) {
        return leaveBalanceService.saveLeaveBalance(leaveBalance);
    }

    @GetMapping("/{employeeId}")
    public LeaveBalance getLeaveBalance(@PathVariable Long employeeId) {
        return leaveBalanceService.getLeaveBalance(employeeId);
    }

    @PutMapping("/{employeeId}")
    public LeaveBalance updateLeaveBalance(
            @PathVariable Long employeeId,
            @RequestBody LeaveBalance leaveBalance) {

        return leaveBalanceService.updateLeaveBalance(employeeId, leaveBalance);
    }
}