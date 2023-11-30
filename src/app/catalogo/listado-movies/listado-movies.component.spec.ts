import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMoviesComponent } from './listado-movies.component';

describe('ListadoMoviesComponent', () => {
  let component: ListadoMoviesComponent;
  let fixture: ComponentFixture<ListadoMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoMoviesComponent]
    });
    fixture = TestBed.createComponent(ListadoMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
