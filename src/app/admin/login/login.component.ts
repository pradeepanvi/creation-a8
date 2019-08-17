import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminLoginF: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.adminLoginF.value);
    this.router.navigate(['dashboard'], { relativeTo: this.route });
  }

  private initForm() {
    this.adminLoginF = new FormGroup({
      'user': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

}
