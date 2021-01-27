import { useState, useEffect } from 'react';
import employee_data from './data/employee_data';
import MultiRangeSlider from './components/MultiRangeSlider/MultiRangeSlider';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';

import './index.css';

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
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState('All Departments');
  const [ageRange, setAgeRange] = useState({ min: 0, max: 100 });
  const [ageMin, setAgeMin] = useState(0);
  const [ageMax, setAgeMax] = useState(100);
  const [sort, setSort] = useState('name');

  // Simulated API call
  useEffect(() => {
    // Gets the age range
    const ages = employee_data.map(({ age }) => age).sort();
    const min = ages[0];
    const max = ages[ages.length - 1];

    setEmployees(sortByObjProperty(employee_data, 'name'));
    setAgeRange({ min, max });
    setAgeMin(min);
    setAgeMax(max);
  }, []);

  // HELPER FUNCTION
  const sortByObjProperty = (arr, property) => {
    return arr.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  };

  // FILTER FUNCTIONS
  const nameFilter = (employees) => {
    return employees.filter((employee) => {
      return employee.name.toLowerCase().includes(name);
    });
  };

  const ageFilter = (employees) => {
    return employees.filter((employee) => {
      return employee.age >= ageMin && employee.age <= ageMax;
    });
  };

  const departmentFilter = (employees) => {
    if (department === 'All Departments') {
      return employees;
    }
    return employees.filter((employee) => employee.department === department);
  };

  // EVENT HANDLERS
  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  };

  const handleName = (e) => {
    setSort('name');
    setName(e.target.value.toLowerCase());
  };

  // Combines all filters together
  const filteredEmployees = employees
    ? sortByObjProperty(
        nameFilter(ageFilter(departmentFilter(employees))),
        sort
      )
    : employees;

  return (
    <div className='App'>
      <h1>Kiewit's Illustrious Employees With Incredible Talent</h1>
      <div className='container'>
        <div className='inputs'>
          <h3>Search by Name</h3>
          <input type='text' onChange={handleName} />
          <MultiRangeSlider
            ageRange={ageRange}
            setAgeMin={setAgeMin}
            setAgeMax={setAgeMax}
            setSort={setSort}
          />
          <h3>Search by Department</h3>
          <select onChange={handleDepartment}>
            <option value={'All Departments'}>All Departments</option>
            {employees &&
              [...new Set(employees.map((employee) => employee.department))]
                .sort()
                .map((department) => {
                  return <option value={department}>{department}</option>;
                })}
          </select>
        </div>
        {employees && <EmployeeTable employees={filteredEmployees} />}
      </div>
    </div>
  );
}

export default App;
