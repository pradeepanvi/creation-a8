import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        EditProfileComponent,
        AboutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        UserRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class UserModule { }