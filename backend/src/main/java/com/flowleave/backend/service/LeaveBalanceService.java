package com.flowleave.backend.service;

import com.flowleave.backend.entity.LeaveBalance;

public interface LeaveBalanceService {

    LeaveBalance saveLeaveBalance(LeaveBalance leaveBalance);

    LeaveBalance getLeaveBalance(Long employeeId);

    LeaveBalance updateLeaveBalance(Long employeeId, LeaveBalance leaveBalance);
}