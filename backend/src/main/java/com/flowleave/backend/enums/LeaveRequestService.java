package com.flowleave.backend.service;

import com.flowleave.backend.entity.LeaveRequest;

import java.util.List;

public interface LeaveRequestService {

    LeaveRequest applyLeave(LeaveRequest leaveRequest);

    List<LeaveRequest> getAllLeaves();

    LeaveRequest getLeaveById(Long id);

    LeaveRequest updateLeaveStatus(Long id, LeaveRequest leaveRequest);

    void deleteLeave(Long id);
}