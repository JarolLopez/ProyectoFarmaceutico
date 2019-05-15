import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasdosComponent } from './estadisticasdos.component';

describe('EstadisticasdosComponent', () => {
  let component: EstadisticasdosComponent;
  let fixture: ComponentFixture<EstadisticasdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
