package com.flowleave.backend.repository;

import com.flowleave.backend.entity.LeaveRequest;
import com.flowleave.backend.enums.LeaveStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Long> {

    List<LeaveRequest> findByEmployeeId(Long employeeId);

    List<LeaveRequest> findByStatus(String status);

    long countByStatus(LeaveStatus status);

    List<LeaveRequest> findTop5ByOrderByAppliedDateDesc();
}