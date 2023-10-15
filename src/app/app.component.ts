import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TravelPlanDetailsComponent } from './travel-plan-details/travel-plan-details.component';
import { TotalRouteComponent } from './total-route/total-route.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AFOApp';

  response: any;

  constructor(private httpclient: HttpClient) {  }
  // this.title = '';
  
  async getResponse(){
    console.log("Hii");
    this.response = await this.httpclient.get<WeatherForecast[]>('https://localhost:7066/WeatherForecast');

    // console.log(this.response);
  }


  
}

export interface WeatherForecast
{
   Date: Date;
   TemperatureC : number;
   TemperatureF : number;
   Summary : string;
}

