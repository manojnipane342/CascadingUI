import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityModel } from 'src/app/model/city-model';
import { StateModel } from 'src/app/model/state-model';
import { CityService } from 'src/app/service/city.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cityList: CityModel[] = [];
  cityForm: FormGroup;
  stateList: StateModel[] = [];
  constructor(private apiCity: CityService, private fb: FormBuilder, private apiState: StateService) {

    this.cityForm = this.fb.group({
      name: ['', [Validators.required]],
      stateId: ['',]
    });
  }

  ngOnInit(): void {
    this.getCityList();
    this.getStateList();
  }

  getCityList() {
    this.apiCity.getCity().subscribe(res => {
      this.cityList = res;
    })
  }

  getStateList() {
    this.apiState.getState().subscribe(res => {
      this.stateList = res;
    })
  }

  public onSubmit() {
    this.apiCity.addCity(this.cityForm.value).subscribe(res => {
      this.getStateList();
      this.cityForm.reset();
      this.getCityList();
    })

  }

}
