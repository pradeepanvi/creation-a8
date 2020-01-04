import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from './shared/auth-guard.service';
import { NgModule } from '@angular/core';

const userRoutes: Routes = [
    {
        path: 'user', component: UserComponent, children: [
            { path: '', component: AboutComponent, canActivate: [AuthGuard] },
            { path: 'sign-up', component: SignupComponent },
            { path: 'sign-in', component: SigninComponent },
            { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard] },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }