import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpoadNoticiaComponent } from './upoad-noticia.component';

describe('UpoadNoticiaComponent', () => {
  let component: UpoadNoticiaComponent;
  let fixture: ComponentFixture<UpoadNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpoadNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpoadNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
