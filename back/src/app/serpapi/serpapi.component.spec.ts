import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpapiComponent } from './serpapi.component';

describe('SerpapiComponent', () => {
  let component: SerpapiComponent;
  let fixture: ComponentFixture<SerpapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerpapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerpapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
