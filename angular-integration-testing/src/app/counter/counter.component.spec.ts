import {CounterComponent} from "./counter.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeDefined();
  });

  it("should render counter property", () => {
    component.counter = 42;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css(".counter"));
    const el: HTMLElement = de.nativeElement;
    expect(el.textContent).toContain("42")
  });

  it("should add green class if counter even", () => {
    component.counter = 6;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css(".counter"));
    const el: HTMLElement = de.nativeElement;

    expect(el.classList.contains('green')).toBeTruthy();
  });

  it("should increment counter if clicked", () => {
    let btn = fixture.debugElement.query(By.css("#increment"));
    btn.triggerEventHandler("click", null);

    expect(component.counter).toBe(1);
  });
});
