import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './countries-routing/pages/by-capital-page/by-capital-page.component';
import { ByCountriePageComponent } from './countries-routing/pages/by-countrie-page/by-countrie-page.component';
import { ByRegionPageComponent } from './countries-routing/pages/by-region-page/by-region-page.component';
import { CountryPegeComponent } from './countries-routing/pages/country-pege/country-pege.component';
import { CountriesRoutingModule } from './countries-routing/countries-routing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './countries-routing/components/country-table/country-table.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountriePageComponent,
    ByRegionPageComponent,
    CountryPegeComponent,
    CountryTableComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
