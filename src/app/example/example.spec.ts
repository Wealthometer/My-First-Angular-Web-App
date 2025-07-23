import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example } from './example';

describe('Example', () => {
  let component: Example;
  let fixture: ComponentFixture<Example>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
