import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelPlanDetailsComponent } from './travel-plan-details/travel-plan-details.component';
import { PlaceComponent } from './place/place.component';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { LyftPricesComponent } from './lyft-prices/lyft-prices.component';
import { TotalRouteComponent } from './total-route/total-route.component';
import { ROUTES, Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TravelPlanDetailsComponent,
    PlaceComponent,
    RideDetailsComponent,
    LyftPricesComponent,
    TotalRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, MatInputModule, 
    MatDatepickerModule, MatNativeDateModule, 
    HttpClientModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: TravelPlanDetailsComponent},
      {path: 'includes-airport', component: TotalRouteComponent},
    ])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
