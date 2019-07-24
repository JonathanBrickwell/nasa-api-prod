import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomyPictureFeatureComponent } from './astronomy-picture-feature.component';

describe('AstronomyPictureFeatureComponent', () => {
  let component: AstronomyPictureFeatureComponent;
  let fixture: ComponentFixture<AstronomyPictureFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronomyPictureFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomyPictureFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
