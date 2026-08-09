package com.flowleave.backend.service.impl;

import com.flowleave.backend.entity.LeaveRequest;
import com.flowleave.backend.enums.LeaveStatus;
import com.flowleave.backend.repository.LeaveRequestRepository;
import com.flowleave.backend.service.LeaveRequestService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class LeaveRequestServiceImpl implements LeaveRequestService {

    private final LeaveRequestRepository leaveRequestRepository;

    public LeaveRequestServiceImpl(LeaveRequestRepository leaveRequestRepository) {
        this.leaveRequestRepository = leaveRequestRepository;
    }

    @Override
    public LeaveRequest applyLeave(LeaveRequest leaveRequest) {

        leaveRequest.setAppliedDate(LocalDate.now());
        leaveRequest.setStatus(LeaveStatus.PENDING);

        return leaveRequestRepository.save(leaveRequest);
    }

    @Override
    public List<LeaveRequest> getAllLeaves() {
        return leaveRequestRepository.findAll();
    }

    @Override
    public List<LeaveRequest> getLeavesByStatus(LeaveStatus status) {
        return leaveRequestRepository.findByStatus(status);
    }

    @Override
    public LeaveRequest getLeaveById(Long id) {
        return leaveRequestRepository.findById(id).orElse(null);
    }

    @Override
    public LeaveRequest approveLeave(Long id) {

        LeaveRequest leave = leaveRequestRepository.findById(id).orElse(null);

        if (leave == null) {
            return null;
        }

        leave.setStatus(LeaveStatus.APPROVED);

        return leaveRequestRepository.save(leave);
    }

    @Override
    public LeaveRequest rejectLeave(Long id, String remarks) {

        LeaveRequest leave = leaveRequestRepository.findById(id).orElse(null);

        if (leave == null) {
            return null;
        }

        leave.setStatus(LeaveStatus.REJECTED);
        leave.setManagerRemarks(remarks);

        return leaveRequestRepository.save(leave);
    }

    @Override
    public LeaveRequest cancelLeave(Long id) {

        LeaveRequest leave = leaveRequestRepository.findById(id).orElse(null);

        if (leave == null) {
            return null;
        }

        leave.setStatus(LeaveStatus.CANCELLED);

        return leaveRequestRepository.save(leave);
    }

    @Override
    public void deleteLeave(Long id) {
        leaveRequestRepository.deleteById(id);
    }

    @Override
    public List<LeaveRequest> getEmployeeLeaveHistory(Long employeeId) {
        return leaveRequestRepository.findByEmployeeId(employeeId);
    }
}