import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/pagina/';
  constructor(private clienteHttp:HttpClient) { }

  AgregarProducto(datosProducto:Producto):Observable<any>{

    return this.clienteHttp.post(this.API+"?insertar=1",datosProducto);
  }

  ObtenerProductos(){
    return this.clienteHttp.get(this.API);

  }

  BorrarProducto(id:any):Observable<any>{

    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
}
