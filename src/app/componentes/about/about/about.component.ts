import { Component, OnInit } from '@angular/core';
import { ProductoService } from'../../../../service/productos.service'
import{Route} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  ProductoList: any[]=[];
  constructor(private ProductoSvc:ProductoService) {
  this.ProductoSvc.getAll().subscribe((resul:any)=>
  {
    this.ProductoList=resul;
    console.log(resul)
  })
  }


  ngOnInit(): void {
  }

}
