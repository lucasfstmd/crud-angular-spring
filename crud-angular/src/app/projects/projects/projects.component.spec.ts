import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjctsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjctsComponent;
  let fixture: ComponentFixture<ProjctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjctsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
