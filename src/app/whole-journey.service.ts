import { Injectable } from '@angular/core';
import { TravelDetails } from './Models/TravelDetails';
import { AddressDetails } from './Models/Location';

@Injectable({
  providedIn: 'root'
})
export class WholeJourneyService {

  constructor() { }
  traveDetails : TravelDetails = new TravelDetails;
  FromToPickUpAirPorts : TravelDetails = new TravelDetails;
  PickUpAirportToDestinationAirport : TravelDetails = new TravelDetails;
  DestinationAirportToDestination : TravelDetails = new TravelDetails;

  addedAirport = false;

  getMeNearByAirPorts(){
    this.FromToPickUpAirPorts.from = this.traveDetails.from;
    this.DestinationAirportToDestination.to = this.traveDetails.to;
    console.log("after assigning");
    console.log(this.FromToPickUpAirPorts);
    console.log(this.DestinationAirportToDestination);
    console.log("after assigning");
    
    // this.FromToPickUpAirPorts.to  =  
    this.getMeNearByAirPort();
  }

  getMeNearByAirPort(): AddressDetails{
    
    return new AddressDetails;
  }
}
