import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarpedidoComponent } from './guardarpedido.component';

describe('GuardarpedidoComponent', () => {
  let component: GuardarpedidoComponent;
  let fixture: ComponentFixture<GuardarpedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarpedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
