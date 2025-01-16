import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailclientComponent } from './detailclient.component';

describe('DetailclientComponent', () => {
  let component: DetailclientComponent;
  let fixture: ComponentFixture<DetailclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailclientComponent]
    });
    fixture = TestBed.createComponent(DetailclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
