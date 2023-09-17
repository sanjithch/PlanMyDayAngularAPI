import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/ResponseFromUberFares';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {
 @Input() rideDetails!: Product;
  constructor() { 
  }

  ngOnInit(): void {
  }



}

// 