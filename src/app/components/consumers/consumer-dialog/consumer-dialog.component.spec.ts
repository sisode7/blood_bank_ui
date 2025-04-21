import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerDialogComponent } from './consumer-dialog.component';

describe('ConsumerDialogComponent', () => {
  let component: ConsumerDialogComponent;
  let fixture: ComponentFixture<ConsumerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerDialogComponent]
    });
    fixture = TestBed.createComponent(ConsumerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
