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
  sortDir = 1;//1= 'ASE' -1= DSC
  constructor(private apiCountry: CountryService, private fb: FormBuilder) {

    this.countryForm = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]]
    });
    this.sortArr('name');
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

  public onSubmit() {
    debugger
    this.apiCountry.addCountry(this.countryForm.value).subscribe(res => {
      console.log(res);
      this.getCountryList();
      this.countryForm.reset();
    })

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
}
