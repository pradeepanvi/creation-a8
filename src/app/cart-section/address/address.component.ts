import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressList: any;

  constructor(private route: ActivatedRoute, private router: Router, private _globalSerive: GlobalService) { }

  ngOnInit() {
    this.addressList = this._globalSerive.addressList;
    console.log(this.addressList);
  }

  addNewAddress() {
    this.router.navigate(['../new-address'], { relativeTo: this.route })
  }

  setAddress(index: number) {
    this._globalSerive.final_order.push({ address: this.addressList[index] })
    this.router.navigate(['../pay-now'], { relativeTo: this.route })
  }
  editAddress(index: number) {
    this.router.navigate([index], { relativeTo: this.route })
  }
  deleteAddress(index: number) {
    this._globalSerive.deleteAddress(index)
  }


}
