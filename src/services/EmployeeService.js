import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees/";

const ALL_EMPLOYEES = EMPLOYEE_API_BASE_URL;
const ADD_EMPLOYEE = EMPLOYEE_API_BASE_URL + "add-employee";
const GET_EMPLOYEE = EMPLOYEE_API_BASE_URL;
const UPDATE_EMPLOYEE = EMPLOYEE_API_BASE_URL;

class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "add-employee", employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + employeeId);
    };
}


export default new EmployeeService();

