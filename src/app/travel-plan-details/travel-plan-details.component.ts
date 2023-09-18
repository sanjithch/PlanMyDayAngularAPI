import { Component, OnInit } from '@angular/core';
import { TravelDetails } from '../Models/TravelDetails';
import { AddressDetails } from '../Models/Location';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseFromUberFares } from '../Models/ResponseFromUberFares';
import { ResponseFromLyftFares } from '../Models/ResponseFromLyftFares';
import { FilterMode } from '../Models/FilterModel';

@Component({
  selector: 'app-travel-plan-details',
  templateUrl: './travel-plan-details.component.html',
  styleUrls: ['./travel-plan-details.component.css']
})
export class TravelPlanDetailsComponent implements OnInit {
  traveldetails: any;
   uberFaresResponse : ResponseFromUberFares | undefined;
   body : requestBodyForFares  = new requestBodyForFares;
   lyftFares: ResponseFromLyftFares | undefined;
   finalUberRides: FilterMode[] | undefined 

   sortByFilter = ['price', 'duriation'];

  constructor(private httpclient : HttpClient) {
   
  }
  // }

  ngOnInit(): void {
    this.traveldetails = new TravelDetails();
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
    console.log(this.traveldetails);
    
    this.body.destinations 
    = [{"latitude" : this.traveldetails.from.data.lat, "longitude" : this.traveldetails.from.data.long}];
    this.body.pickup = 
    {"latitude" : this.traveldetails.to.data.lat, "longitude" : this.traveldetails.to.data.long};
    //  this.traveldetails.to.data.lat;
    // this.body.pickup.longitude = this.traveldetails.to.data.long;
    console.log("body for fares");
    console.log(this.body);
    await this.httpclient.post<ResponseFromUberFares>(environment.uberFares, this.body).subscribe(data => {
      // console.log(data);
      this.uberFaresResponse = data;
      // console.log("my object...");
      // console.log(this.uberFaresResponse);
    })

    await this.httpclient.post<ResponseFromLyftFares>(environment.lyftFares, this.body).subscribe(data => {
      this.lyftFares = data
    })

    setTimeout(()=>{
      console.log("........Uber Fares......");
      console.log(this.uberFaresResponse);
      console.log("........Lyft Fares......");
      console.log(this.lyftFares);
      
    }, 5000);
  }

  sortRidesBy(){
    var selectElement = document.getElementById("sortBy") as HTMLSelectElement;
    var sortingBy = selectElement.value;
    console.log("....sorting by..."+sortingBy);
    if(sortingBy===this.sortByFilter[0]){
      //for uber
      var count = this.uberFaresResponse?.data.products.tiers[0].products.length;
      var temp ;
      if(count){
        console.log("......sorting....");
        for(var i=0;i<count;i++){
          for(var j=i+1;j<count;j++){
            
          }
        }
      }

      //for lyft
      
    }
    else if(sortingBy===this.sortByFilter[1]){

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