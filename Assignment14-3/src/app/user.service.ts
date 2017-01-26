import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/******************************************************************************************
 Promises:

 * Definition : Helps you run functions asynchronously, and use their return values
 (or exceptions) but only once when executed.
 * Not Lazy
 * Not cancellable. The two possible decisions are
    - Reject
    - Resolve
 * Cannot be retried(Promises should have access to the original function
    that returned the promise in order to have a retry capability, which is a bad practice)

 Observables:

 * Definition : Helps you run functions asynchronously, and use their return values in a
 continous sequence(multiple times) when executed.
 * By default, it is Lazy as it emits values when time progresses.
 * Has a lot of operator which simplifies coding effort.
 * One operator retry can be used to retry when ever needed,
 also if we need to retry the observable based on some conditions retryWhen can be used.

 ********************************************************************************************/

@Injectable()
export class UserService {

  constructor(private http : Http) { }

  getDataByPromise(){
    return this.http.get("http://jsonplaceholder.typicode.com/users").toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getDataByObservable(){
    return this.http.get("http://jsonplaceholder.typicode.com/users")
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
