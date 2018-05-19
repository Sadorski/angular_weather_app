import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather: any;
  average: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.getChicago().subscribe(data=> {
      this.weather = data
      this.average = (this.weather.main.temp_max + this.weather.main.temp_min)/2
    })
  }
  

}
