package com.flowleave.backend.service.impl;

import com.flowleave.backend.entity.LeaveBalance;
import com.flowleave.backend.repository.LeaveBalanceRepository;
import com.flowleave.backend.service.LeaveBalanceService;
import org.springframework.stereotype.Service;

@Service
public class LeaveBalanceServiceImpl implements LeaveBalanceService {

    private final LeaveBalanceRepository leaveBalanceRepository;

    public LeaveBalanceServiceImpl(LeaveBalanceRepository leaveBalanceRepository) {
        this.leaveBalanceRepository = leaveBalanceRepository;
    }

    @Override
    public LeaveBalance saveLeaveBalance(LeaveBalance leaveBalance) {
        return leaveBalanceRepository.save(leaveBalance);
    }

    @Override
    public LeaveBalance getLeaveBalance(Long employeeId) {
        return leaveBalanceRepository.findByEmployeeId(employeeId).orElse(null);
    }

    @Override
    public LeaveBalance updateLeaveBalance(Long employeeId, LeaveBalance leaveBalance) {

        LeaveBalance existing = leaveBalanceRepository.findByEmployeeId(employeeId).orElse(null);

        if (existing == null) {
            return null;
        }

        existing.setCasualLeave(leaveBalance.getCasualLeave());
        existing.setSickLeave(leaveBalance.getSickLeave());
        existing.setEarnedLeave(leaveBalance.getEarnedLeave());

        return leaveBalanceRepository.save(existing);
    }
}