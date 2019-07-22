import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(public global: GlobalService) { }

  ngOnInit() {
    this.global.fixed_inner = false;
  }

  ngOnDestroy() {
    this.global.fixed_inner = true;
  }

}
