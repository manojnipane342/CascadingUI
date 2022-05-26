import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { StateModel } from '../model/state-model';
import { ApiProvider } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class StateService {
  APIurl = `${environment._apiUrl}State/`;
  constructor(private api: ApiProvider) { }

    // add country
    addState(State: StateModel):  Observable<any>  {
      return this.api.post(this.APIurl + `AddState`, State);
    }
  
    
}
