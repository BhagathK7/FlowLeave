INSERT IGNORE INTO departments (id, department_name, description)
VALUES
(1,'IT','Information Technology'),
(2,'HR','Human Resources'),
(3,'Finance','Finance Department');

INSERT IGNORE INTO employees (id, employee_code, first_name, last_name, email, password, designation, joining_date, role, department_id)
VALUES
(1,'ADM001','System','Admin','admin@flowleave.com','admin123','System Administrator',CURDATE(),'ADMIN',1);