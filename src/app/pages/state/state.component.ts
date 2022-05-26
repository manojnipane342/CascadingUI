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
  sortDir!: number;
  constructor(private apiCountry: CountryService,private apiState: StateService, private fb: FormBuilder) { 

    this.stateForm = this.fb.group({
      name: ['', [Validators.required]],
      countryid: ['', ]
    });
  }

  onSortClick(event: any,colName:string) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir = -1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortDir = 1;
    }
    this.sortArr(colName);
  }
  

  sortArr(colName: any) {
    this.countryList.sort((a: any, b: any) => {
      a = a[colName].toLowerCase();
      b = b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }
  ngOnInit(): void {
    this.getCountryList ();
  }



  getCountryList() {
    this.apiCountry.getCountry().subscribe(res => {
      this.countryList = res;
      console.log(this.countryList)
    })
    console.log(this.countryList);
  }

  public onSubmit(){
    debugger
    this.apiState.addState(this.stateForm.value).subscribe(res=>{
      console.log(res);
      this.getCountryList ();
      this.stateForm.reset();
    })
    
  }
}
