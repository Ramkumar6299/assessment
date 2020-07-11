import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-statewise',
  templateUrl: './statewise.component.html',
  styleUrls: ['./statewise.component.css']
})
export class StatewiseComponent implements OnInit {
  tablearray = [];
  constructor(private service:ServiceService) {
    this.service.table().subscribe((data)=>{this.tablearray=data;console.log(this.tablearray)},(error)=>{})
    console.log(this.tablearray.length)
   }

  ngOnInit(): void {
  }

}
