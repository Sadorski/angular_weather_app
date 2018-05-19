import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  weather: any;
  average: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.getDallas().subscribe(data=> {
      this.weather = data
      this.average = (this.weather.main.temp_max + this.weather.main.temp_min)/2
    })
  }
}
