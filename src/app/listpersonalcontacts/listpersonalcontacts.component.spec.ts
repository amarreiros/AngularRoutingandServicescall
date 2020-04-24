import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpersonalcontactsComponent } from './listpersonalcontacts.component';

describe('ListpersonalcontactsComponent', () => {
  let component: ListpersonalcontactsComponent;
  let fixture: ComponentFixture<ListpersonalcontactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpersonalcontactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpersonalcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
