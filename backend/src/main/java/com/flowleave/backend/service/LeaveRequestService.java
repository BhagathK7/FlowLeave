package com.flowleave.backend.service;

import com.flowleave.backend.entity.LeaveRequest;

import java.util.List;

public interface LeaveRequestService {

    LeaveRequest applyLeave(LeaveRequest leaveRequest);

    List<LeaveRequest> getAllLeaves();

    LeaveRequest getLeaveById(Long id);

    LeaveRequest approveLeave(Long id);

    LeaveRequest rejectLeave(Long id, String remarks);

    LeaveRequest cancelLeave(Long id);

    void deleteLeave(Long id);

    List<LeaveRequest> getEmployeeLeaveHistory(Long employeeId);
}