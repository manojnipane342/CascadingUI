import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryModel } from 'src/app/model/country-model';
import { StateModel } from 'src/app/model/state-model';
import { CountryService } from 'src/app/service/country.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  stateForm: FormGroup;
  countryList: CountryModel[] = [];
  stateList: StateModel[] = [];
  constructor(private apiCountry: CountryService, private apiState: StateService, private fb: FormBuilder) {

    this.stateForm = this.fb.group({
      name: ['', [Validators.required]],
      countryid: ['',]
    });
  }

  ngOnInit(): void {
    this.getCountryList();
    this.getStateList();
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

  public onSubmit() {
    this.apiState.addState(this.stateForm.value).subscribe(res => {
      this.getCountryList();
      this.stateForm.reset();
      this.getStateList();
    })

  }


}
