import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
const URL =  'assets/data/ciudad.json';
@Injectable({
  providedIn:'root'
})
export class CiudadService{
  constructor(private http: HttpClient){}

  getAll(){
    return this.http.get(URL)
  }
}
