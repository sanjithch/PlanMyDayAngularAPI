import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() placeType : any;
  address: string = " ";

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  async fetchAddress(){
    console.log(this.address);
    // var addresses: Observable<string[]>;
    // addresses = await this.http.get<string[]>(environment.uberAddressFetchURL+this.address);
    // setTimeout(function(){
    //   console.log(addresses)
    // }, 2000);
  }

}
