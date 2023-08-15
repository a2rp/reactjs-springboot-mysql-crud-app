import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Navigate, useNavigate } from 'react-router-dom';
import UpdateEmployee from './UpdateEmployee';
import { styled } from 'styled-components';

const UpdateButton = styled.button`
    background-color: #0b9ab9;
    color: #fff;
    border: none;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 3px;
`;

const DeleteButton = styled.button`
    background-color: orangered;
    color: #fff;
    border: none;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 3px;
    margin-left: 10px;
`;

const ListEmployee = () => {
    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        EmployeeService.getEmployees().then(response => {
            setEmployees(response.data);
        });
    }, []);

    const handleDeleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(res => {
            setEmployees(employee => employees.filter(employee => employee.id !== id));
        });
    };

    return (
        <div className="container">
            <h1>List of Employees</h1>
            <table style={{ width: "100%", tableLayout: "fixed" }}>
                <thead style={{ backgroundColor: "#000", color: "#fff" }}>
                    <tr>
                        <td style={{ padding: "15px" }}>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                <UpdateButton onClick={() => navigate(`/update-employee?id=${employee.id}`)}>View/Update</UpdateButton>
                                <DeleteButton onClick={() => handleDeleteEmployee(employee.id)}>Delete</DeleteButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee