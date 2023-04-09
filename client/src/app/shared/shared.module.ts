import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule
  ]
})
export class SharedModule { }
