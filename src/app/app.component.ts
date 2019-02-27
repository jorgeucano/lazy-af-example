import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  load: boolean = false;

  constructor() {
    console.log('app.component contructor');
  }
}
