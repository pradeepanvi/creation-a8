import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-paytm-order',
  templateUrl: './paytm-order.component.html',
  styleUrls: ['./paytm-order.component.scss']
})
export class PaytmOrderComponent implements OnInit {
  orderidForm: FormGroup

  constructor(private _globalSerive: GlobalService, public fb: FormBuilder, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this._globalSerive.final_order.push({ orderId: this.orderidForm.value })
    this.router.navigate(['../confirm-order'], { relativeTo: this.route })
  }

  private initForm() {
    this.orderidForm = this.fb.group({
      orderid: this.fb.control('')
    })
  }

}
