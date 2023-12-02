import { Component, OnInit } from '@angular/core';
import { WholeJourneyService } from '../whole-journey.service';

@Component({
  selector: 'app-total-route',
  templateUrl: './total-route.component.html',
  styleUrls: ['./total-route.component.css']
})
export class TotalRouteComponent implements OnInit {

  constructor(public wholeJouneryService: WholeJourneyService) { }

  ngOnInit(): void {
  }

}
