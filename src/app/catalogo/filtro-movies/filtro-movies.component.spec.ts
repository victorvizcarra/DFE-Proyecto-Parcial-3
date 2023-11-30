import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMoviesComponent } from './flitro-movies.component';

describe('FlitroMoviesComponent', () => {
  let component: FiltroMoviesComponent;
  let fixture: ComponentFixture<FiltroMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroMoviesComponent]
    });
    fixture = TestBed.createComponent(FiltroMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
