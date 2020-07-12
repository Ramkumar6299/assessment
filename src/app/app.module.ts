import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule,FormBuilder,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConnectorComponent } from './connector/connector.component';
import { DashheaderComponent } from './dashheader/dashheader.component';
import { DashsideComponent } from './dashside/dashside.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DouhgnutChartComponent } from './douhgnut-chart/douhgnut-chart.component';
import { StatewiseComponent } from './statewise/statewise.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectorComponent,
    DashheaderComponent,
    DashsideComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DouhgnutChartComponent,
    StatewiseComponent,
    NavBarComponent,
    RadarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
