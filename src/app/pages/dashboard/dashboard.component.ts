import { Component, OnInit } from '@angular/core';
import { CityModel } from 'src/app/model/city-model';
import { CountryModel } from 'src/app/model/country-model';
import { StateModel } from 'src/app/model/state-model';
import { CityService } from 'src/app/service/city.service';
import { CountryService } from 'src/app/service/country.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countryList: CountryModel[] = [];
  stateList: StateModel[] = [];
  cityList: CityModel[] = [];
  constructor(private apiCountry: CountryService, private apiState: StateService, private apiCity: CityService) { }

  ngOnInit(): void {
    this.getCountryList();
    this.getStateList();
    this.getCityList();
  }

  getCountryList() {
    this.apiCountry.getCountry().subscribe(res => {
      this.countryList = res;
    })
  }

  getStateList() {
    this.apiState.getState().subscribe(res => {
      this.stateList = res;
    })
  }

  getCityList() {
    this.apiCity.getCity().subscribe(res => {
      this.cityList = res;
    })
  }

  getCountryState(event: any) {
    let countryId = event.target.value;
    this.apiState.getStatebycountryId(+countryId).subscribe(res => {
      this.stateList = res;
    })
  }

  getStateCity(event: any) {
    let stateId = event.target.value;
    this.apiCity.getCitybyStateId(+stateId).subscribe(res => {
      this.cityList = res;
    })
  }

}
