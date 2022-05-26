import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CityModel } from '../model/city-model';
import { ApiProvider } from './api.service';



@Injectable({
    providedIn: 'root'
})
export class CityService {
    APIurl = `${environment._apiUrl}City/`;
    constructor(private api: ApiProvider) { }

    // add City
    addCity(city: CityModel): Observable<any> {
        return this.api.post(this.APIurl + `AddCity`, city);
    }

    // get City
    getCity(): Observable<any> {
        return this.api.get(this.APIurl + `GetGetCity`);
    }

    // get city by state
    getCitybyStateId(stateId: any): Observable<any> {
        return this.api.get(this.APIurl + `GetGetCitybyStateId?id=${stateId}`);
    }

}
