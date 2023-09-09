import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxHamburguerMenuComponent } from './checkbox-hamburguer-menu.component';

describe('CheckboxHamburguerMenuComponent', () => {
  let component: CheckboxHamburguerMenuComponent;
  let fixture: ComponentFixture<CheckboxHamburguerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxHamburguerMenuComponent]
    });
    fixture = TestBed.createComponent(CheckboxHamburguerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
