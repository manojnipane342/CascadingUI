import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './pages/city/city.component';
import { CountryComponent } from './pages/country/country.component';
import { StateComponent } from './pages/state/state.component';

const routes: Routes = [
  { path: 'country', component: CountryComponent },
  { path: 'state', component: StateComponent },
  { path: 'city', component: CityComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
