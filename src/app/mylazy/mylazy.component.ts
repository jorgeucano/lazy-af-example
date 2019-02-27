import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mylazy',
  template: '<h1>Hello Lazy World!</h1>'
})
export class MylazyComponent implements OnInit {
  constructor() {
    console.log('lazy constructor');
  }
  ngOnInit(): void {
    console.log('lazy ngoninit');
  }
}
