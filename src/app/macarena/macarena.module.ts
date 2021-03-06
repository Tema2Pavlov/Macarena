import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacarenaComponent } from './macarena.component';
import { MacarenaRoutingModule } from './macarena-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegPageComponent } from './pages/reg-page/reg-page.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ProfilePostsComponent } from './pages/profile-page/profile-posts/profile-posts.component';


@NgModule({
  declarations: [
    MacarenaComponent,
    LoginPageComponent,
    RegPageComponent,
    ProfilePageComponent,
    ProfilePostsComponent,
  ],
  imports: [
    CommonModule,
    MacarenaRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDatepickerModule,
  ]
})
export class MacarenaModule { }
