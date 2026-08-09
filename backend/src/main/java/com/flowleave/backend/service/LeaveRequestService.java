package com.flowleave.backend.service;

import com.flowleave.backend.entity.LeaveRequest;
import com.flowleave.backend.enums.LeaveStatus;

import java.util.List;

public interface LeaveRequestService {

    LeaveRequest applyLeave(LeaveRequest leaveRequest);

    List<LeaveRequest> getAllLeaves();

    List<LeaveRequest> getLeavesByStatus(LeaveStatus status);

    LeaveRequest getLeaveById(Long id);

    LeaveRequest approveLeave(Long id);

    LeaveRequest rejectLeave(Long id, String remarks);

    LeaveRequest cancelLeave(Long id);

    void deleteLeave(Long id);

    List<LeaveRequest> getEmployeeLeaveHistory(Long employeeId);
}