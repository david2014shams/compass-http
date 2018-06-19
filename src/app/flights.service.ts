import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FlightsService {
  countries

  constructor(private http: HttpClient, private configService: ConfigService) { }

  /**
   * Get url from configuration
   * Make call to url and return Observable
   */
  getFlights(){
    this.configService.getConfig()
      .subscribe(
        (data: Config) => {
          this.http.get(data['countriesUrl'])
          .subscribe(
            (countries) => {
              this.countries = countries;
              console.log(countries);
              return countries;// Confirm?
            }
          )

        }
      )
  }

}

interface Config {

}