import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/service/ciudad.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  ProductoList: any[] = [];
  constructor(private ProductSvc:CiudadService) {
    this.ProductSvc.getAll().subscribe((resul:any)=>
    {
      this.ProductoList=resul;
      console.log(resul)
    })

  }

  ngOnInit(): void {
  }

}
