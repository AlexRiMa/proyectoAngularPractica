import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpObjtListaComponent } from './cmp-objt-lista.component';

describe('CmpObjtListaComponent', () => {
  let component: CmpObjtListaComponent;
  let fixture: ComponentFixture<CmpObjtListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpObjtListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpObjtListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
