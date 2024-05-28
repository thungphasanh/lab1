import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaComponent } from './cha.component';

describe('ChaComponent', () => {
  let component: ChaComponent;
  let fixture: ComponentFixture<ChaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
