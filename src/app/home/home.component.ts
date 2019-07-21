import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  fixed_inner: boolean;
  constructor() { }

  ngOnInit() {
    this.fixed_inner = false;
  }

  ngOnDestroy() {
    this.fixed_inner = true;
    console.log(this.fixed_inner);
  }

}
