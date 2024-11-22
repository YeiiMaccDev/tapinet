import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesAdminComponent } from './times-admin.component';

describe('TimesAdminComponent', () => {
  let component: TimesAdminComponent;
  let fixture: ComponentFixture<TimesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
