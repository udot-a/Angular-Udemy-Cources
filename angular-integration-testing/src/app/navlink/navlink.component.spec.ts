import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlinkComponent } from './navlink.component';
import {By} from "@angular/platform-browser";
import {RouterLinkWithHref} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavlinkComponent', () => {
  let component: NavlinkComponent;
  let fixture: ComponentFixture<NavlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavlinkComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit("should have link to post page", () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    console.log("DEBUG ELEMENTS", debugElements)
    let index = debugElements.findIndex(e => e.properties["href"] === "/posts");

    expect(index).toBeGreaterThan(-1);
  });

});
