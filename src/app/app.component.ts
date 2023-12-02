import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TravelPlanDetailsComponent } from './travel-plan-details/travel-plan-details.component';
import { TotalRouteComponent } from './total-route/total-route.component';
import { Router, Routes } from '@angular/router';
import { WholeJourneyService } from './whole-journey.service';
import { TripDetails } from './Models/TripDetails';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AFOApp';

  response: any;

  constructor(private httpclient: HttpClient, public wholeJounreyService: WholeJourneyService, private snackBar: MatSnackBar, private route: Router) {  }
  // this.title = '';
  
  showAlert(message: string, type: boolean ){
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    this.snackBar.open(message, "close", config);
  }

  async getResponse(){
    console.log("Hii");
    this.response = await this.httpclient.get<WeatherForecast[]>('https://localhost:7066/WeatherForecast');

    // console.log(this.response);
  }

  gotDataFromChild(event: any){
    console.log(event);
  }

  addItToDB(){
    console.log("Called add to db Method....................");
    var dt = new TripDetails();
    if(this.wholeJounreyService.addedAirport){
      // Pick up to pickUP airport 
      dt.Destination = this.wholeJounreyService.FromToPickUpAirPorts.from.data.fullAddress;
      dt.pickUp = this.wholeJounreyService.FromToPickUpAirPorts.to.data.fullAddress;
      dt.price = this.wholeJounreyService.toPickUpAirport;
      dt.type = "Ground";
      this.addDetailsToTheDataBase(dt);

      // pickUP airport to Destination Airport
      dt.Destination = this.wholeJounreyService.PickUpAirportToDestinationAirport.from.data.fullAddress;
      dt.pickUp = this.wholeJounreyService.PickUpAirportToDestinationAirport.to.data.fullAddress;
      dt.price = this.wholeJounreyService.airplaneCharges;
      dt.type = "Air";
      this.addDetailsToTheDataBase(dt);

      // Destination Airport to Destination
      dt.Destination = this.wholeJounreyService.DestinationAirportToDestination.from.data.fullAddress;
      dt.pickUp = this.wholeJounreyService.DestinationAirportToDestination.to.data.fullAddress;
      dt.price = this.wholeJounreyService.toDestinationAirport;
      dt.type = "Ground";
      this.addDetailsToTheDataBase(dt);
    }
    else{
      dt.price = this.wholeJounreyService.onlyOneTripPrice;
      dt.Destination = this.wholeJounreyService.traveDetails.to.data.fullAddress;
      dt.pickUp = this.wholeJounreyService.traveDetails.from.data.fullAddress;
      dt.type = "Ground";
      this.addDetailsToTheDataBase(dt);
    }
  }

  async addDetailsToTheDataBase(td: TripDetails){
    var url = "https://planmydayapi-default-rtdb.firebaseio.com/Users/"+this.wholeJounreyService.currentUser+"/Trips.json";
    this.httpclient.post(url, this.ToJSON(td)).subscribe(response =>{
      console.log("Details Added to the DB");
      this.showAlert("Data added to Database........", true);
      console.log(response);
    })
  }

  ToJSON(td: TripDetails){
    return {pickUp: td.pickUp, Destination: td.Destination, type: td.type, price: td.price};
  }

  navigateMetoMyTrips(){
    this.route.navigate(['/mytrips'])
  }
}

export interface WeatherForecast{
   Date: Date;
   TemperatureC : number;
   TemperatureF : number;
   Summary : string;
}

