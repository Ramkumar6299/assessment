import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-state-wise-details',
  templateUrl: './state-wise-details.component.html',
  styleUrls: ['./state-wise-details.component.css']
})
export class StateWiseDetailsComponent implements OnInit {

  tablearray = [];
  currentStateName;
  active;
  deceased;
  confirmed;
  recovered;
  constructor(private service:ServiceService,private activerout:ActivatedRoute) {
    this.currentStateName = this.activerout.snapshot.params.name;
    this.service.table().subscribe((data)=>{this.tablearray=data;console.log(this.tablearray);
      for(let i=0;i<this.tablearray.length;i++)
      {
        if(this.tablearray[i].states==this.currentStateName)
        {
          this.active = this.tablearray[i].active;
          this.confirmed = this.tablearray[i].confirmed;
          this.recovered = this.tablearray[i].recovered;
          this.deceased = this.tablearray[i].deceased;
        }
      }},(error)=>{});
    console.log(this.tablearray.length);
   
    
   }


  ngOnInit(): void {
  }

}
