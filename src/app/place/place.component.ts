import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddressDetails } from '../Models/Location';
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
  response: AddressDetails = new AddressDetails;
  currentCoOrdinated : CoOrdinates  = new CoOrdinates();
  currentLocation : LocationData = new LocationData();

  tempCoOrdinates : CoOrdinates  = new CoOrdinates();


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
      }
      else if(this.placeType=='Destination'){
        this.response = this.wholeJourneyService.traveDetails.to.data;
        // this.mapHelper(this.wholeJourneyService.traveDetails.to.addressDetails);
        console.log('assigned in Destination...................................');
        console.log("this.response.." + this.response);
        console.log(this.wholeJourneyService.traveDetails)
        this.foraddresses.push(new responseForAddress(this.response.id, this.response.addressLine1+this.response.addressLine2));
        console.log('assigned in Destination...................................');
      }
      else if(this.placeType=='Pickup Airport'){
        this.tempCoOrdinates.latitude = this.wholeJourneyService.traveDetails.from.data.lat;
        this.tempCoOrdinates.longitude = this.wholeJourneyService.traveDetails.from.data.long;
        this.helperForFetchAddresses();
      }
      else if(this.placeType=='Destination Airport'){
        this.tempCoOrdinates.latitude = this.wholeJourneyService.traveDetails.to.data.lat;
        this.tempCoOrdinates.longitude = this.wholeJourneyService.traveDetails.to.data.long;
        this.helperForFetchAddresses();
      }
    }
  }


  // mapHelper(wholeJourneyService: AddressDetails){
  //   this.response.addressLine1 = wholeJourneyService.addressLine1;
  //   this.response.addressLine2 = wholeJourneyService.addressLine2;
  //   this.response.fullAddress = wholeJourneyService.fullAddress;
  //   this.response.title = wholeJourneyService.title;
  //   this.response.provider = wholeJourneyService.provider;
  //   this.response.lat = wholeJourneyService.lat;
  //   this.response.long = wholeJourneyService.long;
  //   this.response.type = wholeJourneyService.type;
  //   this.response.id = wholeJourneyService.id;
  //   this.response.placeType = wholeJourneyService.placeType;
  // }

  async helperForFetchAddresses(){
    await this.http.post<responseForAddress[]>(environment.NearByAirports, this.tempCoOrdinates).subscribe(data => this.foraddresses = data);
          setTimeout(() =>{
            console.log(this.foraddresses);
          }, 500);
  }

  sendData(){
    console.log("data sent");
    this.sendDataToParent.emit(this.response);
  }

  getId(){
    return "addressDropdown"+this.placeType;
  }

  //getting address for the call
  async fetchAddress(){
    console.log("for Address");
    console.log(this.address);

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
      setTimeout(() =>{
        this.sendData();
      }, 500);
    }, 500);
      // await this.getAddresses<
  }

  // get my current Location using navigator library
  async getMyLocation(){
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

  // P.S. My web app is hosted on my PC's localhost and I've connected my phone to my PC's hotspot to access the localhost. Also, I'm using a Huawei Mate 20 Pro.

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


