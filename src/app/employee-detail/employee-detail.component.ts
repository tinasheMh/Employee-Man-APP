import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg: any;
  public selectedId: number;

   // pass the meta data by creating a private local variable of type EmployeeService
   constructor(private _employeeService: EmployeeService) { }



 ngOnInit() {
   this._employeeService.getEmployees()
     .subscribe(data => this.employees = data,
       error => this.errorMsg = error);
 }

}
