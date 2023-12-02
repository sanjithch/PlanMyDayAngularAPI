import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddressDetails, Data } from '../Models/Location';
import { LocationData } from '../Models/CurrentLocationClass';
import { WholeJourneyService } from '../whole-journey.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() placeType : any;
  @Output() sendDataToParent = new EventEmitter<AddressDetails>();
  address: string = " ";
  foraddresses : responseForAddress[] = [];
  restaurantsaddresses : responseForAddress[] = [];
  response: AddressDetails = new AddressDetails;
  responseDup: any;
  currentCoOrdinated : CoOrdinates  = new CoOrdinates();
  currentLocation : LocationData = new LocationData();
  isItCurrentLocation: boolean = false;
  tempCoOrdinates : CoOrdinates  = new CoOrdinates();
  requestedForFood : boolean = false;


  constructor(private http : HttpClient, private wholeJourneyService : WholeJourneyService) { }

  ngOnInit(): void {
    if(this.placeType!=='From'){
      if(this.placeType=='Pickup'){
        this.response = this.wholeJourneyService.traveDetails.from.data;
        // this.mapHelper(this.wholeJourneyService.traveDetails.to.addressDetails);
        console.log('assigned in pick up...................................');
        console.log(this.wholeJourneyService.traveDetails);
        console.log(this.wholeJourneyService.traveDetails.from?.data);
        this.foraddresses.push(new responseForAddress(this.wholeJourneyService.traveDetails.from.data?.id, this.wholeJourneyService.traveDetails.from.data.addressLine1+this.wholeJourneyService.traveDetails.from.data.addressLine2));
        console.log('assigned in pick up...................................');
        this.currentCoOrdinated.latitude = this.wholeJourneyService.traveDetails.from.data.lat;
        this.currentCoOrdinated.longitude = this.wholeJourneyService.traveDetails.from.data.long;
      }
      else if(this.placeType=='Destination'){
        this.response = this.wholeJourneyService.traveDetails.to.data;
        // this.mapHelper(this.wholeJourneyService.traveDetails.to.addressDetails);
        console.log('assigned in Destination...................................');
        console.log("this.response.." + this.response);
        console.log(this.wholeJourneyService.traveDetails)
        this.currentCoOrdinated.latitude = this.wholeJourneyService.traveDetails.to.data.lat;
        this.currentCoOrdinated.longitude = this.wholeJourneyService.traveDetails.to.data.long;
        this.foraddresses.push(new responseForAddress(this.response.id, this.response.addressLine1+this.response.addressLine2));
        console.log('assigned in Destination...................................');
      }
      else if(this.placeType=='Pickup Airport'){
        this.tempCoOrdinates.latitude = this.wholeJourneyService.traveDetails.from.data.lat;
        this.tempCoOrdinates.longitude = this.wholeJourneyService.traveDetails.from.data.long;
        this.currentCoOrdinated.latitude = this.tempCoOrdinates.latitude;
        this.currentCoOrdinated.longitude = this.tempCoOrdinates.longitude;
        this.helperForFetchAddresses();
      }
      else if(this.placeType=='Destination Airport'){
        this.tempCoOrdinates.latitude = this.wholeJourneyService.traveDetails.to.data.lat;
        this.tempCoOrdinates.longitude = this.wholeJourneyService.traveDetails.to.data.long;
        this.currentCoOrdinated.latitude = this.tempCoOrdinates.latitude;
        this.currentCoOrdinated.longitude = this.tempCoOrdinates.longitude;
        this.helperForFetchAddresses();
      }
    }
  }

  changeYourRequest(){
    this.requestedForFood = !this.requestedForFood;
  }

  // getting near by restaurants and mcdonalds
  async getMeFood(type: string){
    if(type==='restaurants'){
      console.log(this.tempCoOrdinates);
      await this.http.post<responseForAddress[]>(environment.NearByRestaurants, this.currentCoOrdinated).subscribe(data => this.restaurantsaddresses = data);
      setTimeout(() =>{
        console.log(this.restaurantsaddresses);
      }, 500);
    }
    else if(type==='mcDonalds'){
      await this.http.post<responseForAddress[]>(environment.NearByMcDonalds, this.currentCoOrdinated).subscribe(data => this.restaurantsaddresses = data);
      setTimeout(() =>{
      console.log(this.foraddresses);
      }, 500);
    }
  }

  async helperForFetchAddresses(){
    await this.http.post<responseForAddress[]>(environment.NearByAirports, this.tempCoOrdinates).subscribe(data => this.foraddresses = data);
          setTimeout(() =>{
            console.log(this.foraddresses);
          }, 500);
  }

  sendData(){
    this.sendDataToParent.emit(this.response);
  }

  getId(){
    return "addressDropdown"+this.placeType;
  }

  //getting address for the call
  async fetchAddress(){
    console.log("for Address");
    console.log(this.address);
    if(this.placeType==="Pickup Airport") this.wholeJourneyService.pickUPAirportUberAPIChange = this.address;
    if(this.placeType==="Destination Airport") this.wholeJourneyService.destinationAirportUberAPIChange = this.address;

    await this.http.get<responseForAddress[]>(environment.uberAddressFetchURL + this.address).subscribe(data => this.foraddresses = data);
    setTimeout(() =>{
      console.log(this.foraddresses);

    }, 500);
  }

  //fetching co-ordinates
  async getAddressesCoordinates(){
    console.log("for coordinates");
    var dropDown = document.getElementById("addressDropdown"+this.placeType) as HTMLSelectElement;
    var selectedElement = dropDown.value;
    console.log(selectedElement);
    
    await this.http.get<AddressDetails>(environment.uberCoordinatesFetchURL + selectedElement).subscribe(data => this.response = data);
    setTimeout(() =>{
      this.response.placeType = this.placeType;
      console.log(this.response);
      this.responseDup = this.response;
      
      setTimeout(() =>{
        this.sendData();
      }, 500);
      if(!this.isItCurrentLocation){
        this.currentCoOrdinated.latitude = this.responseDup?.data.lat;
        this.currentCoOrdinated.longitude = this.responseDup?.data.long
      }
    }, 500);
      // await this.getAddresses<
  }

  // get my current Location using navigator library
  async getMyLocation(){
    this.isItCurrentLocation = true;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(async (position)=> {
        this.currentCoOrdinated.latitude = position.coords.latitude;
        this.currentCoOrdinated.longitude = position.coords.longitude;
        console.log("lattitude " + position.coords.latitude);
        console.log("longitude " + position.coords.longitude);
        console.log("....before..");
        console.log(this.currentLocation);
        await this.http.post<LocationData>(environment.uberCurrentLocation, this.currentCoOrdinated).subscribe(data=>this.currentLocation = data);
        console.log("......after...");
        console.log(this.currentLocation);
        setTimeout(()=>{
          console.log(this.currentLocation);
          this.mapCurrentLocationToAddress();
        }, 3000);
      },
      (err)=> console.log(err.message))
    }
  }

  mapCurrentLocationToAddress(){
    console.log("at time");
    if(this.currentLocation){
      this.foraddresses.push(new responseForAddress(this.currentLocation.data.address.location.id, this.currentLocation.data.address.location.fullAddress));
      console.log("got the current addresses");
      console.log(this.foraddresses);
    }
  }
  
}

export class responseForAddress{
  id = "";
  address = "";
  constructor(id?: string, address?: string){
    if(address) this.address = address;
    if(id) this.id = id;
  }
}

export class CoOrdinates{
  "latitude" = 0;
  "longitude" = 0;
}


