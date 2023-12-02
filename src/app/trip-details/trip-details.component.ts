import { Component, Input, OnInit } from '@angular/core';
import { TripDetails } from '../Models/TripDetails';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  url: string = "";
  constructor() { }
  @Input() td : any;
  ngOnInit(): void {
     if(this.td.type==="Ground") this.url = "./assets/Images/aeroplane.jpeg";
     else this.url = "./assets/Images/carImage.jpeg";
    //  var divElement = document.getElementsByTagName("div")[0];
    //  divElement.setAttribute("class", this.td.type)
  }

}
