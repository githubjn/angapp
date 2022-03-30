import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Observable <Country[]> | undefined;
  
  constructor(
        private countryService: CountryService
      ) { }

  ngOnInit(): void {
    this.showCountries();
  }

  showCountries(){
    this.countries = this.countryService.getCountries();
  }


}
