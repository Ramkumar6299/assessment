import { Component } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent {
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

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Active', 'Recovered', 'Demised'];

  public radarChartData: ChartDataSets[] = [
    { data: this.array , label: 'Covid 19 analysis' }
  ];
  public radarChartType: ChartType = 'radar';

}