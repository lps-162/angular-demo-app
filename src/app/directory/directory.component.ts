import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    {
      id: 1,
      name: 'Rock Dwayne Johnson',
      belt: 'black'
    },
    {
      id: 2,
      name: 'Deepika Padukone',
      belt: 'deeppink'
    },
    {
      id: 3,
      name: 'Sri Venkat',
      belt: 'blue'
    },
    {
      id: 4,
      name: 'dummy',
      belt: 'yellow'
    }
  ];

  dateVal = new Date();
  myClasses = {'redText': true, 'underline': false};
  
  constructor() { }

  ngOnInit() {
  }

}
