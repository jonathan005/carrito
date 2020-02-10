import { Component, OnInit } from '@angular/core';
import { ItemsI } from '../models/itemsI.interface';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  items: ItemsI[];
  constructor(private itemsrv: ItemsService) {}
  ngOnInit(){
    this.itemsrv.obtenerItems().subscribe(
      res =>{
        this.items = res;
      }
    )
  }
}
