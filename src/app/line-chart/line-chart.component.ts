import { Component,OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ServiceService } from '../service.service'
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {
  dataArray:any=[];
  dataArray1=[];
  month=[];
  cases=[];
  
  constructor(private service:ServiceService)
  {
     this.dataArray = this.service.graph().subscribe((data)=>{ this.dataArray1=data;console.log(this.dataArray1[0].month)
      for(let i=0;i<this.dataArray1.length;i++)
      {
        this.cases[i]=this.dataArray1[i].case;
        this.month[i]=this.dataArray1[i].month;
      }
    },(error)=>{}) ; 
      //this.func();
  }
  ngOnInit(): void {
    
   // console.log(this.cases)
  }
  func()
  {
   // console.log(this.cases);
    
  }
 

  lineChartData: ChartDataSets[] = [
    { data: this.cases, label: 'Covid weekly rise' },
    { data: [6,7,2,8,23,34,77], label: 'Covid weekly recovered' }
  ];

  lineChartLabels: Label[] = this.month;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
}
