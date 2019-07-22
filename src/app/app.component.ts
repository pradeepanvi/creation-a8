import { Component, OnInit } from '@angular/core';
import { GlobalService } from './shared/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'creation-a8';
  fixed_inner: boolean;
  constructor(public global: GlobalService) { }

  ngOnInit() {
    var header = document.querySelector('header');
    //Sticky header
    window.onscroll = function () {
      window.scrollY > 300 ? header.classList.add('fixed') : header.classList.remove('fixed');
    }

    this.fixed_inner = this.global.fixed_inner

  }
}

