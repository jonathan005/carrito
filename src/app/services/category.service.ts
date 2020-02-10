import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable, VirtualTimeScheduler} from 'rxjs';
import {map} from 'rxjs/operators';
import {CategoriaI} from '../models/categoriaI.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriaCollection: AngularFirestoreCollection<CategoriaI>;
  private categorias: Observable<CategoriaI[]>;
  constructor(db: AngularFirestore) {
    this.categoriaCollection= db.collection<CategoriaI>('categorias');
    this.categorias=this.categoriaCollection.snapshotChanges().pipe(map(
      acctions =>{
        return acctions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data};
        });
      }
    ));
   }
   getCategorias(){
     return this.categorias;
   }
   getCateoria(id:string){
     return this.categoriaCollection.doc<CategoriaI>(id).valueChanges();
   }
}
