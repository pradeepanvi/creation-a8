import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { GlobalService } from '../shared/global.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Homepage } from '../shared/homepage.interface';
declare let $;
export interface homepage {
  welcome: {
    title: string;
    des: string;
    btnTxt: string
  },
  sliderItems: {
    name: string;
    url: string;
  },
  ourProduct: {
    title: string;
    des: string;
    productItems: any;
  },
  ourService: {
    title: string;
    des: string;
    serviceItems: any;
  },
  ourClient: {
    title: string;
    des: string;
    clientItems: any;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  welcome: any;
  slider: any;
  ourProduct: any;
  ourService: any;
  ourClient: any;
  askQF: FormGroup;

  constructor(private global: GlobalService, private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getJSONData();
  }

  getJSONData() {
    this.http
      .get('https://identitycards-3b7a2.firebaseio.com/homePage.json')
      .subscribe((res: Homepage) => {
        this.welcome = res.welcome;
        this.slider = res.sliderItems;
        this.ourProduct = res.ourProduct;
        this.ourService = res.ourService;
        this.ourClient = res.ourClient;
        console.log(res);
        setTimeout(() => {
          this._detectViewport();
        }, 1000);
      });
  }

  private initForm() {
    this.askQF = new FormGroup({
      name: this.fb.control('', Validators.required),
      mail: this.fb.control('', Validators.required),
      phone: this.fb.control('', Validators.required),
      msg: this.fb.control('', Validators.required),
    });
  }
  onSubmit() {
    console.log(this.askQF.value);
    this.http
      .post('http://pkanvi.com/dev/identitycards-a8/send.php', this.askQF.value)
      .subscribe((res) => console.log(res));
  }

  _detectViewport() {
    if (window.innerWidth > 767) {
      $('.owl-banner').owlCarousel({
        loop: true,
        nav: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 5,
      });
    }

    if (window.innerWidth < 768) {
      $('.owl-banner').owlCarousel({
        items: 2,
        loop: false,
        center: true,
        nav: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
      });
    }

    //max height each div
    if (window.innerWidth > 767) {
      var h3height = 0;
      $('#our_product aside').each(function () {
        if (h3height < $(this).outerHeight()) {
          h3height = $(this).outerHeight();
        }
      });
      $('#our_product aside').height(h3height);
    }
  }
}
