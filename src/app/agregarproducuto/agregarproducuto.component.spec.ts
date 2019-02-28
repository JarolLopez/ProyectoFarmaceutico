import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarproducutoComponent } from './agregarproducuto.component';

describe('AgregarproducutoComponent', () => {
  let component: AgregarproducutoComponent;
  let fixture: ComponentFixture<AgregarproducutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarproducutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarproducutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
