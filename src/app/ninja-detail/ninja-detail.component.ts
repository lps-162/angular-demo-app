import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ninja-detail',
  templateUrl: './ninja-detail.component.html',
  styleUrls: ['./ninja-detail.component.css']
})
export class NinjaDetailComponent implements OnInit {
  ninjaId;

  constructor(private route: ActivatedRoute) { 
    this.ninjaId = this.route.snapshot.params['name'];
    //console.log(ninjaId);
    // going and fetching server contents with ninjaId
    // set some ninja value
  }

  ngOnInit() {
  }

}
