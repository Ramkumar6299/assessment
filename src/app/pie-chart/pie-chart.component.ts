import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent {

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
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
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
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Active', 'Recovered', 'Demised'];
  public pieChartData: SingleDataSet = this.array;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
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