import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFilterInputComponent } from './book-filter-input.component';

describe('BookFilterInputComponent', () => {
  let component: BookFilterInputComponent;
  let fixture: ComponentFixture<BookFilterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFilterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFilterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
