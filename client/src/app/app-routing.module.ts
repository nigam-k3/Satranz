import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ToolComponent } from './tool/tool.component';
import { ImageTOtextComponent } from './tool/image-totext/image-totext.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'ragistration',
    component: RegistrationComponent,
  },
  {
    path:'tool',
    component: ToolComponent,
  },
  {
    path:'image-to-text',
    component: ImageTOtextComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
