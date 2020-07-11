import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-douhgnut-chart',
  templateUrl: './douhgnut-chart.component.html',
  styleUrls: ['./douhgnut-chart.component.css']
})

export class DouhgnutChartComponent {
  dataArray1=[];
  day =[];
  active =[];
  recovered =[];
  death =[];
  array = [];
  c1:number=0;
  c2:number=0;
  c3:number=0;
  constructor(private service:ServiceService)
  {
    this.service.graph1().subscribe((data)=>{ this.dataArray1=data;
      for(let i=0;i<this.dataArray1.length;i++)
      {
        this.day[i]=this.dataArray1[i].day;
        this.active[i]=this.dataArray1[i].active;
        this.c1 = this.c1 + this.dataArray1[i].active;
        this.recovered[i]=this.dataArray1[i].recovered;
        this.c2 = this.c2 + this.dataArray1[i].recovered;
        this.death[i]=this.dataArray1[i].death;
        this.c3 = this.c3 + this.dataArray1[i].death;
      }
      this.array.push(this.c1,this.c2,this.c3)
     },(error)=>{}) ; 
    console.log(this.array);
  }

  doughnutChartLabels: Label[] = ['Active', 'Recovered', 'Demised'];
  doughnutChartData: MultiDataSet = [
    this.array
  ];
  doughnutChartType: ChartType = 'doughnut';
   
 public doughnutColors:Array<any>=[
  { // dark grey
       backgroundColor: '#F97300',
       borderColor: '#F97300',
       pointBackgroundColor: 'rgba(77,83,96,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(77,83,96,1)'
     },
     { // dark grey
       backgroundColor: 'red',
       borderColor: '#F97300',
       pointBackgroundColor: 'rgba(77,83,96,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(77,83,96,1)'
     }]; 

}