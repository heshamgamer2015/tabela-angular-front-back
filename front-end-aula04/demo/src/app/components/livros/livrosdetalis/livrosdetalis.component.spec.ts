import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosdetalisComponent } from './livrosdetalis.component';

describe('LivrosdetalisComponent', () => {
  let component: LivrosdetalisComponent;
  let fixture: ComponentFixture<LivrosdetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosdetalisComponent]
    });
    fixture = TestBed.createComponent(LivrosdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
