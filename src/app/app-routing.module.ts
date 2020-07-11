import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashheaderComponent } from './dashheader/dashheader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StatewiseComponent } from './statewise/statewise.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AuthGuard } from './auth.guard'


const routes: Routes = [
  {
    path:"",
    component:NavBarComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"login/register",
    component:RegisterComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"State-wise-details",
    component:StatewiseComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:"State-wise-details/week",
    component:PieChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
