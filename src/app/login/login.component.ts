import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
//import { HttpClient } from '@angular/common/http'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin = [];
  userform;

  constructor(private service: ServiceService,private fb:FormBuilder) {
    this.userform = this.fb.group(
      {
        'email' : this.fb.control(""),
        'password' : this.fb.control("")
      }
    )
  }
  login()
  {
    console.log(this.userform.value);
    this.service.check().subscribe((data)=>console.log(data),(error)=>console.log(error))
   // this.service.login(this.userform.value).subscribe((data) => { console.log(data) }, (err) => { console.log(err) }, () => { });
  }



  ngOnInit(): void {
  }

}
