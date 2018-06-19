import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'ual-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  list;

  constructor(private flights: FlightsService) { }

  ngOnInit() {
    // this.list = this.flights.getFlights();
    this.flights.getFlights();
    this.list = this.flights.countries;
  }

}
