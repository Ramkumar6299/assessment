import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform;
  constructor(private service:ServiceService,private fb:FormBuilder) { 
    this.userform = this.fb.group(
      {
        'firstName' : this.fb.control(""),
        'lastName' : this.fb.control(""),
        'email': this.fb.control(""),
        'password': this.fb.control(""),
        //'repeatpass' : this.fb.control("")
      }
    )
 }
  register()
  {
    console.log(this.userform.value);
    this.service.register(this.userform.value).subscribe((data)=>{console.log(data)},(error)=>{alert(error);console.log(error)})
  }


  ngOnInit(): void {
  }

}
