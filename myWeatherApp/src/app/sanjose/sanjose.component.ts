import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather: any;
  average: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.getSanJose().subscribe(data=> {
      this.weather = data
      this.average = (this.weather.main.temp_max + this.weather.main.temp_min)/2
    })
  }
  

}
