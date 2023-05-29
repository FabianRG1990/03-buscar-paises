import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/interface';

@Component({
  selector: 'pages-country-pege',
  templateUrl: './country-pege.component.html',
  styles: [],
})
export class CountryPegeComponent implements OnInit {
  public country?: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private coutriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.coutriesService.searchCountryByAlphacode(id))
      )

      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }

        return (this.country = country);

        // this.coutriesService
        //   .searchCountryByAlphacode(id)
        //   .subscribe((country) => {
        //     console.log(country);
        //   });
      });
  }
}
