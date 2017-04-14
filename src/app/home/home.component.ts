import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "This is the home page";
  @Input() ninja;
  @Output() onYell = new EventEmitter();

  myBoolean = true;

  constructor() { }

  ngOnInit() {
    console.log(this.myBoolean);
  }

  fireYellEvent(e) {
    console.log('Before Emitting : In Child');
    this.onYell.emit(e);
  }

  toggleStuff() {
    this.myBoolean = !this.myBoolean;
  }
}
