import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public signUp: any

  constructor(private fromBuilder: FormBuilder, private service: ServiceService) {
    this.signUp = this.fromBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
 
  }
  onSubmit() {
    const data = {
      name: this.signUp.value.name,
      email: this.signUp.value.email,
      mobile: this.signUp.value.phone,
      password: this.signUp.value.password
    }
    console.log(data);

    this.service.postApi('addUser', data).subscribe((s) => {
      console.log(s);
        this.service.postApi(`getUser`,s).subscribe((res) => {
          console.log(res);
        })

    })

  }

}
