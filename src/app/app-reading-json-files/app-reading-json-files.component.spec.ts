import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReadingJsonFilesComponent } from './app-reading-json-files.component';

describe('AppReadingJsonFilesComponent', () => {
  let component: AppReadingJsonFilesComponent;
  let fixture: ComponentFixture<AppReadingJsonFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppReadingJsonFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReadingJsonFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
