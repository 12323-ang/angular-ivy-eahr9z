import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {
  weatherData: any;
  apikey = "b1b15e88fa797225412429c1c50c122a1";
  baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(this.baseUrl + city + "id=524901&appid=" + this.apikey);
  }
}
