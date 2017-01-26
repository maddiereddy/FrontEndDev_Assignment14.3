import { Component } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'Promises vs Observables';

  constructor( public userService: UserService){}

  users1: any = [];
  users2: any = [];

  fetchDataByPromise(){
    this.userService.getDataByPromise().then( //using Promises
      response => this.users1 = response,
      error => console.log(error)
    )
  }

  fetchDataByObservable(){
    this.userService.getDataByObservable().subscribe(  //using Observables
      response => this.users2 = response,
      error => console.log(error)
    )
  }
}
