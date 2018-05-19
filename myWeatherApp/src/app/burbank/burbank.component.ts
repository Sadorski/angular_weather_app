import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: any;
  average: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.getBurbank().subscribe(data=> {
      this.weather = data
      this.average = (this.weather.main.temp_max + this.weather.main.temp_min)/2
    })
  }
  

}