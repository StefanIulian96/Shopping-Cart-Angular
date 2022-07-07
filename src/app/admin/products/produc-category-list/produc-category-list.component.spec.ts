import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducCategoryListComponent } from './produc-category-list.component';

describe('ProducCategoryListComponent', () => {
  let component: ProducCategoryListComponent;
  let fixture: ComponentFixture<ProducCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
