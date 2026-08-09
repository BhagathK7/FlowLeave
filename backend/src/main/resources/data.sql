INSERT INTO departments (id, department_name, description)
VALUES
    (1, 'IT', 'Information Technology'),
    (2, 'HR', 'Human Resources'),
    (3, 'Finance', 'Finance Department')
ON CONFLICT (id) DO NOTHING;