import { ComponentFixture, TestBed } from '@angular/core/testing';

import { synopsis } from './synopsis.component';

describe('SynopsisComponent', () => {
  let component: synopsis;
  let fixture: ComponentFixture<synopsis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ synopsis ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(synopsis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
