import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabledata } from './tabledata';

describe('Tabledata', () => {
  let component: Tabledata;
  let fixture: ComponentFixture<Tabledata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabledata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabledata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
