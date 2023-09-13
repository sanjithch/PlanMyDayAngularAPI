import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  foraddresses = [""];
  searchControl = new FormControl();

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  async fetchAddress(){
    console.log(this.address);
    var addresses: any;
    await this.http.get<string[]>(environment.uberAddressFetchURL + this.address).subscribe(data => this.foraddresses = data);
    setTimeout(() =>{
      console.log(this.foraddresses);
    }, 500);
  }

  getAddresses(){
    console.log("hii");
    return this.foraddresses;
  }

}
