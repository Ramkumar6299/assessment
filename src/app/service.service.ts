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
  register(data):Observable<any>
  {
    return this.http.post("https://zen-user-api.herokuapp.com/users/register",data);
  }
  covid():Observable<any>
  {
    return this.http.get("https://covid19.mathdro.id/api/countries/india");
  }
  graph():Observable<any>
  {
    return this.http.get("https://5f047cf58b06d60016ddeb9a.mockapi.io/api/covidweeklystatus");
  }
  graph1():Observable<any>
  {
    return this.http.get("https://5f047cf58b06d60016ddeb9a.mockapi.io/api/currentweek");
  }
  table():Observable<any>
  {
    return this.http.get("https://5f047cf58b06d60016ddeb9a.mockapi.io/api/table");
  }

}
