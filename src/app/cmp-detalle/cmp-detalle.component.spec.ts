import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDetalleComponent } from './cmp-detalle.component';

describe('CmpDetalleComponent', () => {
  let component: CmpDetalleComponent;
  let fixture: ComponentFixture<CmpDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
