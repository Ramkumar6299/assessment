import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.css']
})
export class ConnectorComponent implements OnInit {
  recovered;
  active;
  death;
  updated;
  constructor(private service:ServiceService) {
    this.service.covid().subscribe((data)=>{
      this.active= data.confirmed.value;
      this.death=data.deaths.value;
      this.updated=data.lastUpdate;
      this.recovered=data.recovered.value;
     // console.log(data);
     // console.log(this.updated);
    },(error)=>console.log(error))
   
   }

  ngOnInit(): void {
  }

}
