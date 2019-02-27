import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mynotlazy',
  template: '<h1>Hello not Lazy World!</h1>'
})
export class MyNotlazyComponent implements OnInit {
  constructor() {
    console.log('lazy constructor');
  }
  ngOnInit(): void {
    console.log('lazy ngoninit');
  }
}
