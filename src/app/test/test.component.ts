import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name = 'Tinashe'; // interpolation
  public siteUrl = window.location.href;
  public myId = 'testId'; // property binding
  public isDisabled = false;
  public successClass = 'text-success'; // CSS class binding
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }; // binding for multiple classes ngDerivitive

  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }; // style binding
  public greeting = ''; // event binding property

  public myName = ''; // two way binding

  public displayName = false; // ngIf property
  public color = 'orange'; // ngSwitch

  public colors = ['red', 'blue', 'green', 'yelow'];

  // component interaction parent child, Input Output
  @Input() public parentData: any; // import Input from angular/core

  // component interaction child to parent using an instance of event emitter class.
  // to be able to sent data from child class we need output decorator
  @Output() public childEvent = new EventEmitter(); // import EventEmitter from angular/core

  public person = {
    'firstName': 'Tinashe',
    'lastName': 'Mharapara'
  };

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }


  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event: any) {
    console.log(event);
    this.greeting = 'Welcome to start by knowiz';
  }

  // component interaction
  fireEvent() {
    this.childEvent.emit('Hey knowiz');
  }
}
