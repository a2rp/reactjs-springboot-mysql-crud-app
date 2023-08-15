import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import EmployeeService from '../services/EmployeeService';

const Form = styled.form`
    width: 320px;
    text-align: left;
    margin: 30px;
`;
const Label = styled.label`
    display: block;
`;
const Input = styled.input`
    display: block;
    height: 30px;
    width: 100%;
    margin-bottom: 30px;
    padding-left: 15px;
`;

const UpdateEmployee = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('id')); // send
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({ firstName: "", lastName: "", emailId: "" });
    const handleInputs = (event) => {
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        });
    };
    const handleFormSubmit = (event) => {
        console.log(employee);
        event.preventDefault();
        EmployeeService.updateEmployee(employee, searchParams.get('id')).then(() => {
            navigate("/employees");
        });
    };

    useEffect(() => {
        EmployeeService.getEmployeeById(searchParams.get('id')).then((response) => {
            const employee = response.data;
            setEmployee({ firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId });
        });
    }, []);

    return (
        <div>
            <h1>Add Employee</h1>
            <Form action="" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input type="text" name="firstName" placeholder="First Name" value={employee.firstName} onChange={handleInputs} required />
                </div>
                <div className="form-group">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input type="text" name="lastName" placeholder="Last Name" value={employee.lastName} onChange={handleInputs} required />
                </div>
                <div className="form-group">
                    <Label htmlFor="emailId">Email Id</Label>
                    <Input type="email" name="emailId" placeholder="Email Id" value={employee.emailId} onChange={handleInputs} required />
                </div>
                <div className="form-group">
                    <Input type="submit" className="submitButton" value="Update Employee" />
                    <Input type="button" className="cancelButton" value="Cancel" onClick={(event) => navigate("/employees")} />
                </div>
            </Form>
        </div>
    )
}

export default UpdateEmployee
