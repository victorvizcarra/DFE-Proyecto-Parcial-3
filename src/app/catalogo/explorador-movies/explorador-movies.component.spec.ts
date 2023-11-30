import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploradorMoviesComponent } from './explorador-movies.component';

describe('ExploradorMoviesComponent', () => {
  let component: ExploradorMoviesComponent;
  let fixture: ComponentFixture<ExploradorMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploradorMoviesComponent]
    });
    fixture = TestBed.createComponent(ExploradorMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
