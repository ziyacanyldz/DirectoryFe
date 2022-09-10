import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../dto/List';
import { EkleDto } from '../dto/EkleDto';
import { GuncelleDto } from '../dto/GuncelleDto';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:29071/api/Kayit/getall"
  addPathUrl = "http://localhost:29071/api/Kayit/Add"
  deletePathUrl="http://localhost:29071/api/Kayit/Delete"
  updatePathUrl="http://localhost:29071/api/Kayit/Update"
  getAll():Observable<List[]>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.get<List[]>(`${this.path}`,{'headers' : headers})

  }

  addService(EkleDto:EkleDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.post<any>(`${this.addPathUrl}`,JSON.stringify(EkleDto),{'headers' : headers})
  }
  deleteService(id:any):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .append('content-type','application/x-www-form-urlencoded')
    return this.http.post<any>(`${this.deletePathUrl}`+id,{'headers' : headers})
  }
  updateService(guncelleDto:GuncelleDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.post<any>(`${this.updatePathUrl}`,JSON.stringify(guncelleDto),{'headers' : headers})
  }
 
}
