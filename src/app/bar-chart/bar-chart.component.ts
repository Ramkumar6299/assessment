import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent {
  
  dataArray1=[];
  day =[];
  active =[];
  recovered =[];
  death =[];
  
  constructor(private service:ServiceService)
  {
    this.service.graph1().subscribe((data)=>{ this.dataArray1=data;
      for(let i=0;i<this.dataArray1.length;i++)
      {
        this.day[i]=this.dataArray1[i].day;
        this.active[i]=this.dataArray1[i].active;
        this.recovered[i]=this.dataArray1[i].recovered;
        this.death[i]=this.dataArray1[i].death;
      }
    },(error)=>{}) ; 
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.day;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.active, label: 'Active' },
    { data: this.recovered, label: 'Recovered' },
    { data: this.death, label: 'Demise' }
  ];

}