import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteComponent } from './paste.component';

describe('PasteComponent', () => {
  let component: PasteComponent;
  let fixture: ComponentFixture<PasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
