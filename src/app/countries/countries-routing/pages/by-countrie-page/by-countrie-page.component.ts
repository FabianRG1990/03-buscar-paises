import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: [],
})
export class ByCountriePageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;

    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountries(termino: string): void {
    this.countriesService.searchCountry(termino).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
