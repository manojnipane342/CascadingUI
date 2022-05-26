import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryModel } from 'src/app/model/country-model';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countryForm: FormGroup;
  countryList: CountryModel[] = [];

  constructor(private apiCountry: CountryService, private fb: FormBuilder) {

    this.countryForm = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]]
    });
  
    }


  ngOnInit(): void {
    debugger;
    this.getCountryList();

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
    this.apiCountry.addCountry(this.countryForm.value).subscribe(res=>{
      console.log(res);
      this.getCountryList ();
      this.countryForm.reset();
    })
    
  }

}
