import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  confirmOrder: any;
  cartItems: any;
  address: any;
  orderId: any;
  subTotal: any;
  total: any;

  constructor(private _globalSerive: GlobalService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._globalSerive.final_order);
    this.cartItems = this._globalSerive.final_order[0].order.cartItems;
    this.address = this._globalSerive.final_order[1].address;
    this.orderId = this._globalSerive.final_order[2].orderId;
    this.total = this._globalSerive.final_order[0].order.priceTotal;
  }

  place() {
    this.router.navigate(['../thank-you'], { relativeTo: this.route })
  }

}
