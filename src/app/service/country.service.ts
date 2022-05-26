import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CountryModel } from '../model/country-model';
import { ApiProvider } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  APIurl = `${environment._apiUrl}Country/`;
  constructor(private api: ApiProvider) { }

  // add country
  addCountry(country: CountryModel): Observable<any> {
    return this.api.post(this.APIurl + `AddCountry`, country);
  }

  // get country
  getCountry(): Observable<any> {
    return this.api.get(this.APIurl + `GetCountry`);
  }

}
