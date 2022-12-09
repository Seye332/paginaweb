import { Component, OnInit } from '@angular/core';
import{Route} from '@angular/router';
import { CiudadService } from 'src/service/ciudad.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
