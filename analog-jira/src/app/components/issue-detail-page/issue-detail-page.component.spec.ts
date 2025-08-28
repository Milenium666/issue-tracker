import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailPageComponent } from './issue-detail-page.component';

describe('IssueDetailPageComponent', () => {
  let component: IssueDetailPageComponent;
  let fixture: ComponentFixture<IssueDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
