import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TermComponent } from './term.component';

describe('TermComponent', () => {
  let component: TermComponent;
  let fixture: ComponentFixture<TermComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TermComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});