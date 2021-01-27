import 'rc-slider/assets/index.css';
import { Table } from './style';

const EmployeeTable = ({ employees }) => {
  return (
    <Table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Department</th>
      </tr>
      {employees.map((employee) => {
        return (
          <tr>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.department}</td>
          </tr>
        );
      })}
    </Table>
  );
};

export default EmployeeTable;
