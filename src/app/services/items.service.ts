import { Injectable } from '@angular/core';
import { ItemsI } from '../models/itemsI.interface';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsCollection: AngularFirestoreCollection<ItemsI>;
  private items: Observable<ItemsI[]>;
  constructor(db: AngularFirestore) {
    this.itemsCollection= db.collection<ItemsI>('celulares');
    this.items=this.itemsCollection.snapshotChanges().pipe(map(
      acctions =>{
        return acctions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data};
        });
      }
    ));
   }
   obtenerItems(){
     return this.items;
   }
   getItem(id:string){
     return this.itemsCollection.doc<ItemsI>(id).valueChanges();
   }
}
