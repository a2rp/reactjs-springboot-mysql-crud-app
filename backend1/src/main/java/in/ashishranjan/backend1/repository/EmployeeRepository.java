package in.ashishranjan.backend1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.ashishranjan.backend1.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
