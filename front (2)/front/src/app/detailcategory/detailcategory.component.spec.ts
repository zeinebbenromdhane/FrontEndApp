import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcategoryComponent } from './detailcategory.component';

describe('DetailcategoryComponent', () => {
  let component: DetailcategoryComponent;
  let fixture: ComponentFixture<DetailcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcategoryComponent]
    });
    fixture = TestBed.createComponent(DetailcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
