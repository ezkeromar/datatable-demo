import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDataTableComponent } from './example-data-table.component';

describe('ExampleDataTableComponent', () => {
  let component: ExampleDataTableComponent;
  let fixture: ComponentFixture<ExampleDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
