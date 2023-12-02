import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { WholeJourneyService } from '../whole-journey.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Input() userName : string = "";
  @Input() password : string = "";
  url : string = "https://planmydayapi-default-rtdb.firebaseio.com/Users";
  user: any = null;
  isLogin : boolean = true;
  passwordErrorMessage : boolean = false;
  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar, private wjservice: WholeJourneyService) { }

  ngOnInit(): void {
  }

  logIn(){
    this.checkUserName();
    setTimeout(()=>{
      if(this.user===null){
        this.showAlert("User Does Not exist", false);
      }
      else{
        if(this.user?.PassCode===sha256(this.password)){
          this.wjservice.currentUser = this.userName;
          this.wjservice.userDetails = this.user;
          console.log("added user details to the service................");
          console.log(this.wjservice.currentUser);
          console.log(this.wjservice.userDetails);
          this.router.navigate([""]);

        }
        else{
          this.showAlert("Please enter correct details", false);
        }
      }
    },1000)
  }

  // helps with the alerts
  showAlert(message: string, type: boolean ){
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    this.snackBar.open(message, "close", config);
  }

  isPasswordValid(): boolean{
    var regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    console.log(this.password + " " + regularExpression.test(this.password));
    return regularExpression.test(this.password);
  }

  async SignUp(){
    this.passwordErrorMessage = false;
    console.log("called sign up....");
    if(this.userName.length<5){
      this.showAlert("Should have minimum of 5 Chars", true);
    }
    else if(this.isPasswordValid()){
        console.log("password is valid........");
        await this.http.patch(this.url+"/"+this.userName+".json", {"PassCode": sha256(this.password)}).subscribe( 
                              response => { 
                                this.showAlert("User Added Please login", true); 
                                console.log("Patch is successfull..", response); 
                              }, error => { console.log("error occuered", error); })
        this.passwordErrorMessage = true;
    }
    else{
      // should not meet password crieteria
      console.log("password is not valid.......");
      this.passwordErrorMessage = true;
    }
  }

  async checkUserName(){
    await this.http.get(this.url+"/"+this.userName+".json").subscribe(response => {
      this.user = response;
    })
    setTimeout(()=>{
       console.log(this.user);
    }, 500)
    
  }

  async printUserAndPas(){
    console.log(this.userName);
    console.log(this.password)    ;
    console.log(sha256(this.password));
    // await this.http.get<any>(this.url).subscribe(data => {
    //   this.user = data;
    //   console.log("PassCode...."+ this.user?.PassCode);
    // })
    // setTimeout(()=>{
    //   console.log(this.user);
    // }, 3000);
    // if(this.san.Sanju!==null) 
  }

  changeToSignUp(){
    this.resetFileds();
    this.isLogin = false;
  }

  changeToLogin(){
    this.resetFileds();
    this.isLogin = true;
  }

  resetFileds(){
    this.userName = "";
    this.password = "";
    this.passwordErrorMessage = false;
  }
}
