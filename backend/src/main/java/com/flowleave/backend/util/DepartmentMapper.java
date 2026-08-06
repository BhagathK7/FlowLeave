package com.flowleave.backend.util;

import com.flowleave.backend.dto.request.DepartmentRequest;
import com.flowleave.backend.dto.response.DepartmentResponse;
import com.flowleave.backend.entity.Department;

public class DepartmentMapper {

    public static Department toEntity(DepartmentRequest request) {

        Department department = new Department();

        department.setDepartmentName(request.getDepartmentName());
        department.setDescription(request.getDescription());

        return department;
    }

    public static DepartmentResponse toResponse(Department department) {

        DepartmentResponse response = new DepartmentResponse();

        response.setId(department.getId());
        response.setDepartmentName(department.getDepartmentName());
        response.setDescription(department.getDescription());

        return response;
    }
}