import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
            (res) => {
              this.countries = res;
              // console.log(res);
              console.log(this.countries);
              return this.countries;// Confirm?
            }
          )

        }
      )
  }


getCountries(){
  this.http.get('https://restcountries.eu/rest/v2/all'): Observable <Config>(
    return this.http.get<Config>(
      'https://restcountries.eu/rest/v2/all', 
      {observe: 'response'})
  )
  
}

}


interface Config {

}