import { Component, OnInit } from '@angular/core';
import {CategoriaI} from '../models/categoriaI.interface';
import {CategoryService} from '../services/category.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categorias: CategoriaI[];
  constructor(private categorysrv: CategoryService) {}
  ngOnInit(){
    this.categorysrv.getCategorias().subscribe(
      res =>{
        this.categorias = res;
      }
    )
  }
}
