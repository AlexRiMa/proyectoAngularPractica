import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpBarraComponent } from './cmp-barra.component';

describe('CmpBarraComponent', () => {
  let component: CmpBarraComponent;
  let fixture: ComponentFixture<CmpBarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpBarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
