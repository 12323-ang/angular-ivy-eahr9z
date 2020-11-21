import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {
  weatherData: any;
  apikey = "b78a0580701ddf27a8f5fb3ef9a0b85a";
  baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(this.baseUrl + city + "&appid=" + this.apikey);
  }
}
