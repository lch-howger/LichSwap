import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLiquidityComponent } from './page-liquidity.component';

describe('PageLiquidityComponent', () => {
  let component: PageLiquidityComponent;
  let fixture: ComponentFixture<PageLiquidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLiquidityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLiquidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
