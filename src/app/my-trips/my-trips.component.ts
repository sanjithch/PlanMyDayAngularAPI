import { Component, OnInit } from '@angular/core';
import { TripDetails } from '../Models/TripDetails';
import { HttpClient } from '@angular/common/http';
import { WholeJourneyService } from '../whole-journey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {

  url : string = "https://planmydayapi-default-rtdb.firebaseio.com/Users/";
  trips : any;

  constructor(private http: HttpClient, private wjservice: WholeJourneyService, private router: Router) { }

  ngOnInit(): void {
    if(this.wjservice.currentUser===""){
      this.router.navigate(['/login']);
    }

    this.http.get<TripDetails[]>(this.url+this.wjservice.currentUser+"/Trips.json").subscribe(response=>{
      this.trips=response;
      console.log("request for trips called.......");
    })

    setTimeout(()=>{
      console.log("Here are the trips.............");
      console.log(this.trips);
    },500)
  }

}
