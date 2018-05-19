import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather: any;
  average: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.getDc().subscribe(data=> {
      this.weather = data
      this.average = (this.weather.main.temp_max + this.weather.main.temp_min)/2
    })
  }
}
