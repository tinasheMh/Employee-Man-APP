import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsSingleComponent } from './employee-details-single/employee-details-single.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';

const routes: Routes = [
  { path: 'list', component: EmployeeListComponent },
  { path: 'employees', component: EmployeeDetailComponent},
  {
    path: 'list/:id',
    component: EmployeeDetailsSingleComponent,
    children: [
      { path: 'profile', component: EmployeeProfileComponent },
      { path: 'contact', component: EmployeeContactComponent }
    ]
  },
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  // Wild card route should always be the last page in the config because the router tries to match the routes from the top
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  EmployeeListComponent,
  EmployeeDetailComponent,
  EmployeeDetailsSingleComponent,
  EmployeeProfileComponent,
  EmployeeContactComponent,
  PageNotFoundComponent
];

