import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getSanJose();
    this.getBurbank();
    this.getChicago();
    this.getDallas();
    this.getDc();
    this.getSeattle();
    
  }
  getSanJose(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?zip=95117,us&APPID=57e996fff8e7704208010f5302685373')
  }
  getBurbank(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?zip=95501,us&APPID=57e996fff8e7704208010f5302685373')
  }
  getChicago(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?zip=60007,us&APPID=57e996fff8e7704208010f5302685373')
  }
  getDallas(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?zip=75001,us&APPID=57e996fff8e7704208010f5302685373')
  }
  getDc(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?zip=20001,us&APPID=57e996fff8e7704208010f5302685373')
  }
  getSeattle(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?zip=98101,us&APPID=57e996fff8e7704208010f5302685373')
  }
  
  //  getMoreAbilities(){
//    let abilities = this._http.get('https://pokeapi.co/api/v2/ability/31/')
//     abilities.subscribe(data => {
//       for (var i = 0; i < data.pokemon.length; i++) {
//         console.log(data.pokemon[i].pokemon.name)
//       }
//     })
//   }api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=57e996fff8e7704208010f5302685373
}
