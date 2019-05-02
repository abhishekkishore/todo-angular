import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectitemComponent } from './projectitem.component';

describe('ProjectitemComponent', () => {
  let component: ProjectitemComponent;
  let fixture: ComponentFixture<ProjectitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
