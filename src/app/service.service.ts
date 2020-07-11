import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  login(data):Observable<any>
  {
    let header = {
      headers : new HttpHeaders(
        {
          "Authorization" : "" 
        }
      )
    }
    return this.http.post("https://zen-user-api.herokuapp.com/users/authenticate",data);
  }

  check():Observable<any>
  {
    return this.http.get("https://zen-user-api.herokuapp.com/users/authenticate");
  }

  

}
