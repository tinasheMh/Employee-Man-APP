import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { relative } from 'path';

@Component({
  selector: 'app-employee-details-single',
  templateUrl: './employee-details-single.component.html',
  styleUrls: ['./employee-details-single.component.scss']
})
export class EmployeeDetailsSingleComponent implements OnInit {

  public employeeID: number;
  public employees = [];
  public errorMsg: any;

  constructor(private _employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id').toString(), 10);
      this.employeeID = id;
    });

  }

  goPrevious() {
    const previousId = this.employeeID - 1;
    // this.router.navigate(['/list-current', previousId]); // abosolute path
    this.router.navigate(['../', previousId], {relativeTo: this.route}); // relative path
  }

  goNext() {
    const nextId = this.employeeID + 1;
    // this.router.navigate(['/list-current', nextId]);
    this.router.navigate(['../', nextId], {relativeTo: this.route});
  }

  gotoEmployees() {
    const selectedId = this.employeeID ? this.employeeID : null;
   //  this.router.navigate(['/list-current', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showProfile() {
    const selectedId = this.employeeID ? this.employeeID : null;

    this.router.navigate(['profile', {id: selectedId}],  {relativeTo: this.route});
  }

  showContact() {
    const selectedId = this.employeeID ? this.employeeID : null;

    this.router.navigate(['contact' , {id: selectedId}], {relativeTo: this.route});
  }

}

