import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/service/productos.service';
import{Route} from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {


  ProductoList: any[] = [];
  constructor(private ProductSvc:ProductoService) {
    this.ProductSvc.getAll().subscribe((resul:any)=>
    {
      this.ProductoList=resul;
      console.log(resul)
    })
  }

  ngOnInit(): void {
  }

}
