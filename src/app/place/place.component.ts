import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddressDetails } from '../Models/Location';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() placeType : any;
  @Output() sendDataToParent = new EventEmitter<AddressDetails>();
  address: string = " ";
  foraddresses : any;
  response: any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
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
    var addresses: any;
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
    
    //https://localhost:7066/api/Uber/selectingAdress
    
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
}

export class responseForAddress{
  id = "";
  address = "";
}

