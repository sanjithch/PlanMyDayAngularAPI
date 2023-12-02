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
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TripDetailsComponent } from './trip-details/trip-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelPlanDetailsComponent,
    PlaceComponent,
    RideDetailsComponent,
    LyftPricesComponent,
    TotalRouteComponent,
    FlightDetailsComponent,
    LoginPageComponent,
    MyTripsComponent,
    TripDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, MatInputModule, 
    MatDatepickerModule, MatNativeDateModule, 
    HttpClientModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {path: '', component: TravelPlanDetailsComponent},
      {path: 'includes-airport', component: TotalRouteComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'mytrips', component: MyTripsComponent},
    ])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
