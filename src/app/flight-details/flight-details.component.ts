import { Component, Input, OnInit } from '@angular/core';
import { AirProducts, FlightDetails } from '../Models/FlightDetails';
import { WholeJourneyService } from '../whole-journey.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  @Input() airProducts : AirProducts = new AirProducts;
  
  constructor(public wholeJourneyService: WholeJourneyService) { }
  sortByFilter = ["departureTime","arrivalTime","totalDuration"]

  ngOnInit(): void {
    console.log("....inside the flight Details Component..............");
    console.log(this.airProducts);
  }

  selectFlight(detail : FlightDetails, category: string){
    this.wholeJourneyService.doesIncludeFlight = false;
    this.wholeJourneyService.flightsCategory = category;
    this.wholeJourneyService.detail = detail;
    this.wholeJourneyService.updatePrice();
    console.log(this.wholeJourneyService.detail);
    console.log(this.wholeJourneyService.flightsCategory);
  }

  sortRidesBy(){
      var selectElement = document.getElementById("sortBy") as HTMLSelectElement;
      var sortingBy = selectElement.value;
      console.log("....sorting by..."+sortingBy);
      if(sortingBy==='totalDuration'){
        console.log("......sorting....based....totalDuration.....");
        this.airProducts.details.sort((a,b) => a.totalDuration - b.totalDuration)
      }
      else if(sortingBy==='departureTime'){
        console.log("......sorting....based....departureTime.....");
        this.airProducts.details.sort((a,b) => a.departureTime.localeCompare(b.departureTime))
      }
      else if(sortingBy==='arrivalTime'){
        console.log("......sorting....based....arrivalTime.....");
        this.airProducts.details.sort((a,b) => a.arrivalTime.localeCompare(b.arrivalTime))
      }
  }

}
