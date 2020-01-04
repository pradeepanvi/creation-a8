import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  name: any;

  constructor(private _globalSerive: GlobalService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this._globalSerive.final_order[1].address.name;

    setTimeout(() => {
      this.router.navigate(['/'], { relativeTo: this.route })
    }, 2000);
  }

}
