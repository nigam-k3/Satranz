import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { NgxChessBoardModule } from "ngx-chess-board";
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { LoginComponent } from './login/login.component';
import {StyleClassModule} from 'primeng/styleclass';
import { ToolComponent } from './tool/tool.component';
import { ImageTOtextComponent } from './tool/image-totext/image-totext.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ChessBoardComponent,
    LoginComponent,
    ToolComponent,
    ImageTOtextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgxChessBoardModule.forRoot(),
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
