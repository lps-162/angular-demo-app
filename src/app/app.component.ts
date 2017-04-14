import { Component } from '@angular/core';

@Component({
  selector: 'ninjas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular is nice!';
  name = "LP Venkat";

  someNinja = {
    name: "LP Venkat",
    belt: "yellow"
  };

  ninjas = [
    {
      name: 'venki',
      belt: 'blue'
    },
    {
      name: 'sri',
      belt: 'yellow'
    },
    {
      name: 'whatever',
      belt: 'black'
    }
  ];

  displayMessage 

  submitNinja() {
    console.log(this.someNinja.name);
    console.log(this.someNinja.belt);
  }

  yell() {
    console.log('Event received in parent component');
  }
}
