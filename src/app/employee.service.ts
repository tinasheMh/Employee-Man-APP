import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}

// register the service in app module as a provider [EmployeeService]
// in the constructor type private http: HttpClient. We now have a local variable http to talk to httpclient
// create a new property private _url: string = "/assets/data/employess.json"
// the getMethod returns an observable for our app the observable needs to be cast in a formart that represents employee array
// for that in the app folder create a new file employee.ts and add code for an employee interface
// On get add a type of <IEmployee[]> and also import IEmployee. It will return type of array
// on method getEmployee(): Observable<IEmployee[]> {}

// 3 step - subscribe to the observable from EmplList and EmpDetail

// 4 to handle http error we need a catch operator from import'rxjs/add/operator/catch';
// create a new method errorHandler(error: HttpErrorResponse)
