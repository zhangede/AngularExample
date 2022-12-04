import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  employees: Employee[] = [
    {
      id: "1",
      name:"zhang",
      email: "test@gmail.com",
      phone:1234,
      salary:1234,
      department:"AB" 
    },
    {
      id: "2",
      name:"zhang1",
      email: "test@gmail.com",
      phone:1234,
      salary:1234,
      department:"ABc" 
    },
  ];

  constructor(){}

  ngOnInit(): void {
    this.employees.push();
  }
}
