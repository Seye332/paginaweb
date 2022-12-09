import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/service/productos.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import{Route} from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  formularioDeProductos:FormGroup;

  //ProductoList: any[] = [];
  Productos:any;

  constructor(private ProductSvc:ProductoService,
     public formulario:FormBuilder,
     private crudService:CrudService,
     private ruteador:Router,
     ) {


    this.formularioDeProductos=this.formulario.group({
      modelo:[''],
      color:['']
    });

   // this.ProductSvc.getAll().subscribe((resul:any)=>
    //{
     // this.ProductoList=resul;
     // console.log(resul)
    //})


  }

  ngOnInit(): void {
    this.crudService.ObtenerProductos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Productos=respuesta;
    });
  }
  enviarDatos():any{
    console.log("Me presionaste")
    console.log(this.formularioDeProductos.value);

    this.crudService.AgregarProducto(this.formularioDeProductos.value).subscribe();
    window.confirm("Se ha agregado exitosamente un elemento");
  }

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    if(window.confirm("¿Desea borrar el registro?"))
    this.crudService.BorrarProducto(id).subscribe((respuesta)=>{
      this.Productos.splice(iControl,1);
    });
  }
}
