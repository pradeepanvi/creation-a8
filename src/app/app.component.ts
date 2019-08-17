import { Component, OnInit, Renderer2 } from '@angular/core';
import { GlobalService } from './shared/global.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  previousUrl: any;
  constructor(public global: GlobalService, private render: Renderer2, private router: Router) {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          //for current page name
          let currentUrlSlug = event.url.slice(1);
          let currentUrlSlug2 = 'fixed-inner';
          console.log(currentUrlSlug);
          if (this.previousUrl) {
            this.render.removeClass(document.querySelector('header'), currentUrlSlug2);
            this.render.removeClass(document.querySelector('header'), 'd-none');
          }
          if (currentUrlSlug && currentUrlSlug.includes('#') != true) {
            this.render.addClass(document.querySelector('header'), currentUrlSlug2);
          }
          if (currentUrlSlug.includes('admin')) {
            this.render.addClass(document.querySelector('header'), 'd-none');
            this.render.addClass(document.querySelector('footer'), 'd-none');
          }
          this.previousUrl = currentUrlSlug;
        }
      }
    )
  }

  ngOnInit() {
    var header = document.querySelector('header');
    //Sticky header
    window.onscroll = function () {
      window.scrollY > 300 ? header.classList.add('fixed') : header.classList.remove('fixed');
    }
  }
}

