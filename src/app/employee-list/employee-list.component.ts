import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  // pass the meta data by creating a private local variable of type EmployeeService
  constructor(private _employeeService: EmployeeService,
     private router: Router, private route: ActivatedRoute) { }

  public employees = [];
  public errorMsg: any;
  public selectedId: number;

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 10);
      this.selectedId = id;
    });
  }

  // for navigating to a service we make use of the routing service from angular/router
  onSelect(employee: any) {
   // this.router.navigate(['/employees', employee.id]); // this is absolut path
   this.router.navigate([employee.id], {relativeTo: this.route}); // this is relative path
  }

  isSelected(employee: any) {
    return employee.id === this.selectedId;
  }
}
