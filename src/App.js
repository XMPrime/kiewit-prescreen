import { useState, useEffect } from 'react';
import './App.css';
import employee_data from './data/employee_data';
import MultiRangeSlider from './components/MultiRangeSlider';

/*

Prescreening Evaluation
-----------------------

You will have 24 hours, from when you recieved the email, to complete this challenge.
Feel free to be implement the app in whatever way you feel is best.

	Instructions:
	- Create a React app that:
    + Displays the employee data below
      -Simple map
      -maybe get fancy with a grid?
    + Allows a user to search for an employee by name
      -Text Input
    + Allows a user to filter the data by both department and age
      -By department: Select component
      -By age: Range slider

	- Within 24 hours of when you recieve this challenge, email the GitHub repo link to:
		+ Katelyn.Viola@kiewit.com
    + Kristina.Taing@kiewit.com
    + Kevin.Pozzi@kiewit.com

*/

function App() {
  const [name, setName] = useState('');
  const [employees, setEmployees] = useState();
  const [department, setDepartment] = useState('');
  const [ageMin, setAgeMin] = useState(0);
  const [ageMax, setAgeMax] = useState(100);

  useEffect(() => {
    // simulated API call
    const ages = employee_data.map(({ age }) => age).sort();
    const min = ages[0];
    const max = ages[ages.length - 1];
    setEmployees(employee_data);
    setAgeMin(min);
    setAgeMax(max);
  }, []);

  const nameFilter = (employees) => {
    return employees.filter((employee) => {
      return employee.name.toLowerCase().includes(name);
    });
  };

  const ageFilter = (employees, min, max) => {
    return employees.filter((employee) => {
      return employee.age >= min && employee.age <= max;
    });
  };

  const departmentFilter = (employees, department) => {
    if (department === 'All Departments') {
      return employees;
    }
    return employees.filter((employee) => employee.department === department);
  };

  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const filteredEmployees = employees
    ? nameFilter(
        ageFilter(departmentFilter(employees, department), ageMin, ageMax)
      )
    : employees;

  return (
    <div className='App'>
      <h1>Kiewit</h1>
      <MultiRangeSlider />
      <input type='text' onChange={handleName} />
      <select onChange={handleDepartment}>
        <option disabled selected value>
          filter by dept
        </option>
        <option value={'All Departments'}>All Departments</option>
        {employees &&
          [...new Set(employees.map((employee) => employee.department))]
            .sort()
            .map((department) => {
              return <option value={department}>{department}</option>;
            })}
      </select>
      <div>
        {employees &&
          filteredEmployees.map((employee) => {
            return <p>{employee.name}</p>;
          })}
      </div>
    </div>
  );
}

export default App;
