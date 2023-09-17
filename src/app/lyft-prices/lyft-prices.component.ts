import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../Models/ResponseFromLyftFares';

@Component({
  selector: 'app-lyft-prices',
  templateUrl: './lyft-prices.component.html',
  styleUrls: ['./lyft-prices.component.css']
})
export class LyftPricesComponent implements OnInit {

  @Input() lyftRideDetails : Offer | undefined; 

  // time: any = this.lyftRideDetails?.ride_travel_details.dropoff_estimate.duration_range.duration_ms * 0.001;

  constructor() { }

  ngOnInit(): void {
  }

}
