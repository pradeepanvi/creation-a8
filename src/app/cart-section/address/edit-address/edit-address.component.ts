import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/shared/global.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  addressForm: FormGroup;
  editMode = false;
  id: number;

  constructor(private fb: FormBuilder, private _globalSerive: GlobalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"],
          this.editMode = params["id"] != null;
        this.initForm();
      }
    )
  }

  onSubmit() {
    console.log(this.addressForm.value);
    if (this.editMode) {
      this._globalSerive.updateAddress(this.id, this.addressForm.value);
    } else {
      this._globalSerive.addAddress(this.addressForm.value);
    }
    console.log(this._globalSerive.addressList)
  }

  private initForm() {
    if (this.editMode) {
      const editAddress = this._globalSerive.addressList[this.id];
      this.addressForm = this.fb.group({
        name: this.fb.control(editAddress.name),
        mobile: this.fb.control(editAddress.mobile),
        pincode: this.fb.control(editAddress.pincode),
        address1: this.fb.control(editAddress.address1),
        address2: this.fb.control(editAddress.address2),
        landmark: this.fb.control(editAddress.landmark),
        city: this.fb.control(editAddress.city),
        state: this.fb.control(editAddress.state),
        addressType: this.fb.control(editAddress.addressType)
      })
    } else {
      this.addressForm = this.fb.group({
        name: this.fb.control(""),
        mobile: this.fb.control(""),
        pincode: this.fb.control(""),
        address1: this.fb.control(""),
        address2: this.fb.control(""),
        landmark: this.fb.control(""),
        city: this.fb.control(""),
        state: this.fb.control(""),
        addressType: this.fb.control("")
      })
    }

  }

}
