import { Component, OnInit } from '@angular/core';
import { TravelDetails } from '../Models/TravelDetails';

@Component({
  selector: 'app-travel-plan-details',
  templateUrl: './travel-plan-details.component.html',
  styleUrls: ['./travel-plan-details.component.css']
})
export class TravelPlanDetailsComponent implements OnInit {
  traveldetails!: TravelDetails;

  constructor() {
  }

  ngOnInit(): void {
  }

}
