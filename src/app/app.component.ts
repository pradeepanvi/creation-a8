import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'creation-a8';

  ngOnInit() {
    var header = document.querySelector('header');
    //Sticky header
    window.onscroll = function () {
      window.scrollY > 300 ? header.classList.add('fixed') : header.classList.remove('fixed');
    }

  }
}

