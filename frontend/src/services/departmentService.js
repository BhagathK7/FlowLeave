import api from "./api";

export const getDepartments = async () => {

    const response = await api.get("/departments");

    return response.data;

};

export const addDepartment = async (department) => {

    const response = await api.post("/departments", department);

    return response.data;

};

export const deleteDepartment = async (id) => {

    await api.delete(`/departments/${id}`);

};