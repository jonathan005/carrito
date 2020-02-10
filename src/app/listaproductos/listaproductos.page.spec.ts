import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaproductosPage } from './listaproductos.page';

describe('ListaproductosPage', () => {
  let component: ListaproductosPage;
  let fixture: ComponentFixture<ListaproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaproductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
