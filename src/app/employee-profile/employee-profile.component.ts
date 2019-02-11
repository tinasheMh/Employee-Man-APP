import { Component, OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

    public employeeID: number;
    public employees = [];
    public errorMsg: any;


    constructor(private _employeeService: EmployeeService,
      private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);

        this.route.paramMap.subscribe((params: ParamMap) => {
          const id = parseInt(params.get('id'), 10);
          this.employeeID = id;
        });

    }


}
