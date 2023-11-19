import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMoreInfoComponent } from './profile-more-info.component';

describe('ProfileMoreInfoComponent', () => {
  let component: ProfileMoreInfoComponent;
  let fixture: ComponentFixture<ProfileMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMoreInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
