import { Injectable } from '@angular/core';
import { TravelDetails } from './Models/TravelDetails';
import { AddressDetails } from './Models/Location';
import { FlightDetails } from './Models/FlightDetails';

@Injectable({
  providedIn: 'root'
})
export class WholeJourneyService {

  constructor() { }
  traveDetails : TravelDetails = new TravelDetails;
  FromToPickUpAirPorts : TravelDetails = new TravelDetails;
  PickUpAirportToDestinationAirport : TravelDetails = new TravelDetails;
  DestinationAirportToDestination : TravelDetails = new TravelDetails;

  // for storing the data in database and displaying total
  doesIncludeFlight = false;
  detail: FlightDetails = new FlightDetails;
  flightsCategory: string = '';
  totalPrice = 0;
  toPickUpAirport = 0;
  toDestinationAirport = 0;
  airplaneCharges = 0;
  helper = "0";
  addedAirport = false;

  // for user
  currentUser = "";
  userDetails : any;

  // prices
  onlyOneTripPrice = 0;

  // after the uber API change
  pickUPAirportUberAPIChange = "";
  destinationAirportUberAPIChange = "";


  updatePrice(){
    if(this.getFlightPrice()!==undefined && this.flightsCategory!==''){
      this.helper = this.getFlightPrice();
      this.airplaneCharges = parseInt(this.helper);
      console.log(this.airplaneCharges);
    }
    console.log(".... callled Update Price/.....");
    console.log(this.toPickUpAirport +" " + this.toDestinationAirport);
    this.totalPrice = this.airplaneCharges + this.toPickUpAirport + this.toDestinationAirport;
  }

  getFlightPrice(){
      if(this.flightsCategory==='ANY'){
        return this.detail.fareProducts.ADULT.ANY.fare.totalFare.value //? this?.detail.fareProducts.ADULT.ANY.fare?.totalFare.value : "0"; 
      }
      if(this.flightsCategory==='PLU'){
        return this.detail.fareProducts.ADULT.PLU.fare.totalFare.value //? this?.detail.fareProducts.ADULT.PLU.fare?.totalFare.value : "0"; 
      }
      if(this.flightsCategory==='WGA'){
        return this.detail.fareProducts.ADULT.WGA.fare.totalFare.value //? this?.detail.fareProducts.ADULT.WGA.fare?.totalFare.value : "0"; 
      }
      return this.detail.fareProducts.ADULT.BUS.fare.totalFare.value //? this?.detail.fareProducts.ADULT.BUS.fare?.totalFare.value : "0"; 
  }

  getMeNearByAirPorts(){
    this.FromToPickUpAirPorts.from = this.traveDetails.from;
    this.DestinationAirportToDestination.to = this.traveDetails.to;
    console.log("after assigning");
    console.log(this.FromToPickUpAirPorts);
    console.log(this.DestinationAirportToDestination);
    console.log("after assigning");
    
    // this.FromToPickUpAirPorts.to  =  
    // this.getMeNearByAirPort();
  }
}
