package com.flowleave.backend.service;

import com.flowleave.backend.entity.Department;
import java.util.List;

public interface DepartmentService {

    DepartmentResponse saveDepartment(DepartmentRequest request);

    List<DepartmentResponse> getAllDepartments();

    DepartmentResponse getDepartmentById(Long id);

    void deleteDepartment(Long id);
}