import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  newEmployee = {
    name: '',
    email: '',
    contact_no: '',
    city: '',
    state: '',
    pin_code: '',
    address: ''
  };
  editMode = false;
  editId: number | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
      this.getAllEmployees();
      this.resetForm();
    });
  }

  editEmployee(emp: any): void {
    this.newEmployee = { ...emp };
    this.editId = emp.id;
    this.editMode = true;
  }

  updateEmployee(): void {
    if (this.editId !== null) {
      this.employeeService.updateEmployee(this.editId, this.newEmployee).subscribe(() => {
        this.getAllEmployees();
        this.resetForm();
      });
    }
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.getAllEmployees();
    });
  }

  resetForm(): void {
    this.newEmployee = {
      name: '',
      email: '',
      contact_no: '',
      city: '',
      state: '',
      pin_code: '',
      address: ''
    };
    this.editMode = false;
    this.editId = null;
  }
}
