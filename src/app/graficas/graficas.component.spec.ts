import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasComponent } from './graficas.component';

describe('GraficasComponent', () => {
  let component: GraficasComponent;
  let fixture: ComponentFixture<GraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
