import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TravelDetails } from '../Models/TravelDetails';
import { AddressDetails } from '../Models/Location';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseFromUberFares } from '../Models/ResponseFromUberFares';
import { ResponseFromLyftFares } from '../Models/ResponseFromLyftFares';
import { Router } from '@angular/router';
import { WholeJourneyService } from '../whole-journey.service';

@Component({
  selector: 'app-travel-plan-details',
  templateUrl: './travel-plan-details.component.html',
  styleUrls: ['./travel-plan-details.component.css']
})
export class TravelPlanDetailsComponent implements OnInit {
  traveldetails: any;
  @Input() pickUp = 'From';
  @Input() Destination = 'To';
  @Output() sendDataToApp = new EventEmitter<AddressDetails>();

  //responses from uber
  pickUpNearByAirport : ResponseFromUberFares | undefined;
  destinationNearByAirport: ResponseFromUberFares | undefined;
  uberFaresResponse : ResponseFromUberFares | undefined;

  body : requestBodyForFares  = new requestBodyForFares;
  lyftFares : ResponseFromLyftFares | undefined;
  sortByFilter = ['price', 'duriation','Time of Arrival'];
  noAvailableDeals = false;

  constructor(private httpclient : HttpClient, private router: Router, private wholeJouneryService: WholeJourneyService) {
    if(this.wholeJouneryService.traveDetails){
      console.log("Assigning values to and from");
      this.traveldetails = this.wholeJouneryService.traveDetails;
    }
  }

  ngOnInit(): void {
    this.traveldetails = new TravelDetails();
    if(this.wholeJouneryService.addedAirport){
      console.log("data from service");
      console.log(this.wholeJouneryService.traveDetails);
    }
    if(this.pickUp!=='From'){
      if(this.pickUp==='Pickup') this.traveldetails = this.wholeJouneryService.FromToPickUpAirPorts;
      else if(this.pickUp==='Pickup Airport') this.traveldetails = this.wholeJouneryService.PickUpAirportToDestinationAirport;
      else if(this.pickUp==='Destination Airport') this.traveldetails = this.wholeJouneryService.DestinationAirportToDestination;
      console.log("in pick up");
      console.log(this.traveldetails);
      console.log("in pick up");
    }
  }

  receiveDataFromChild(response: AddressDetails){
    console.log("In the parent");
    if(response.placeType==="From"){
      this.traveldetails.from = response;
    }
    if(response.placeType==="To"){
      this.traveldetails.to = response;
    }
    console.log(response);
  }

  async onSubmit(){
    this.getMeOffers();
  }

  async getMeOffers(){
    console.log(this.traveldetails);
    if(!this.traveldetails){
      this.noAvailableDeals = true;
    }
    else{
      this.body.destinations = [{"latitude" : this.traveldetails.from.data.lat, "longitude" : this.traveldetails.from.data.long}];
      this.body.pickup = {"latitude" : this.traveldetails.to.data.lat, "longitude" : this.traveldetails.to.data.long};
      console.log("body for fares");
      console.log(this.body);
      await this.httpclient.post<ResponseFromUberFares>(environment.uberFares, this.body).subscribe(data => {
        this.uberFaresResponse = data;
        console.log("assinged uber fares...");
        if(!this.uberFaresResponse?.data){
          if(this.pickUp='From'){
            this.wholeJouneryService.traveDetails = this.traveldetails;
            this.wholeJouneryService.addedAirport = true;
            this.wholeJouneryService.getMeNearByAirPorts();
            this.router.navigate(['/includes-airport']);
          }
        }
      })

      await this.httpclient.post<ResponseFromLyftFares>(environment.lyftFares, this.body).subscribe(data => {
        this.lyftFares = data
      })

      setTimeout(()=>{
        console.log("........Uber Fares......");
        console.log(this.uberFaresResponse);
        console.log("........Lyft Fares......");
        console.log(this.lyftFares);
        this.checkForOffers();
      }, 5000);
    }
  }

  checkForOffers(){
    if(!this.uberFaresResponse?.data){
      this.lyftFares = undefined;
      this.uberFaresResponse = undefined;
      this.noAvailableDeals = true;
    }
  }
  
  sortRidesBy(){
    var selectElement = document.getElementById("sortBy") as HTMLSelectElement;
    var sortingBy = selectElement.value;
    console.log("....sorting by..."+sortingBy);
    if(sortingBy==='price'){
      console.log("......sorting....based....price.....");
        this.uberFaresResponse?.data.products.tiers[0].products.sort((a,b)=>{
         return parseFloat(a.fare.substring(1)) - parseFloat(b.fare.substring(1));
        })

        this.lyftFares?.offers.sort((a,b)=>{
          return parseInt(a.cost_estimate.estimated_cost_cents_max) - parseInt(b.cost_estimate.estimated_cost_cents_max);
        })
    }
    else if(sortingBy==='duriation'){
      console.log("......sorting....based....duriation.....");
      this.uberFaresResponse?.data.products.tiers[0].products.sort((a,b) => 
       a.estimatedTripTime - b.estimatedTripTime
       )

      this.lyftFares?.offers.sort((a,b)=>{
        return parseInt(a.ride_travel_details.dropoff_estimate.duration_range.duration_ms)- parseInt(b.ride_travel_details.dropoff_estimate.duration_range.duration_ms);
      })
    }
    else if(sortingBy==='Time of Arrival'){
      console.log("......sorting....based....Time of Arrival.....");
      this.uberFaresResponse?.data.products.tiers[0].products.sort((a,b) => 
       parseInt(a.etaStringShort.substring(0, a.etaStringShort.length-5)) - parseInt(b.etaStringShort.substring(0, b.etaStringShort.length-5))
       )

      this.lyftFares?.offers.sort((a,b)=>{
        return parseInt(a.ride_travel_details.pickup_estimate.duration_range.duration_ms)- parseInt(b.ride_travel_details.pickup_estimate.duration_range.duration_ms);
      })
    }
  }

}

export class requestBodyForFares{
    "destinations": [
      {
        "latitude" : 0,
        "longitude": 0
      }
    ];
    "pickup": {
      "latitude": 0,
      "longitude": 0
    }
}

 // mapUberRides(){
  //   console.log('....mapping uber rides');
  //   this.uberFaresResponse?.data.products.tiers[0].products.map(data => {
  //     console.log(data.fare + "....." + parseFloat(data.fare.substring(1)));
  //     var temp = new FilterMode(parseFloat(data.fare.substring(1)), data.displayName, data.estimatedTripTime, 'Uber');
  //     this.finalUberRides.push(temp);
  //   })
  //   console.log(this.finalUberRides);
  // }
  // mapLyftRides(){
  //   console.log('....adding lyft rides');
  //   this.lyftFares?.offers.map(data => {
  //     var temp = new FilterMode(parseFloat(data.cost_estimate.estimated_cost_cents_max)/100, data.offer_product_id, parseInt(data.ride_travel_details.dropoff_estimate.duration_range.duration_ms)/60000, 'lyft');
  //     this.finalUberRides.push(temp);
  //   })
  //   console.log(this.finalUberRides);
  // }
