import { DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HeroListComponent } from "./hero-list.component";
import { HeroListService } from "./hero-list.service";
import { of } from "rxjs";

describe("HeroListComponent", () => {
  let fixture: ComponentFixture<HeroListComponent>;
  let component: HeroListComponent;
  let service: HeroListService;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [HeroListComponent],
      providers: [HeroListService]
    }).compileComponents();
    fixture = TestBed.createComponent(HeroListComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    service = debugElement.injector.get(HeroListService);
  }));

  afterEach(() => {
    service = null;
    localStorage.removeItem("heroes-data");
  });

  it("If herores-data exist in localstorage then get heroes data", () => {
    //@todo write a test case for above condition. Please set the heroes-data in localStorage and then verify if it exist.
    localStorage.setItem("heroes-data", [
      {
        id: "1",
        firstName: "Captain",
        lastName: "America",
        image: "captain_america.jpeg",
        DOB: "1920-07-04",
        contact: "9999999999"
      }
    ]);
    expect(localStorage.getItem("heroes-data")).toBeTruthy();
    component.callHeroList();
    expect(service.getJSON).toHaveBeenCalled();
  });

  it("If herores-data does not exist in localsotrage then get heroes data", () => {
    const response = [
      {
        id: "1",
        firstName: "Captain",
        lastName: "America",
        image: "captain_america.jpeg",
        DOB: "1920-07-04",
        contact: "9999999999"
      },
      {
        id: "2",
        firstName: "Iron",
        lastName: "Man",
        image: "iron_man.jpeg",
        DOB: "1965-04-04",
        contact: "9999999999"
      },
      {
        id: "3",
        firstName: "Nick",
        lastName: "Fury",
        image: "nick_fury.jpg",
        DOB: "1968-10-08",
        contact: "9999999999"
      }
    ];

    // -- Note :  i have tried this but it is not working of unavailable jest package which is require for spyon
    //@todo write spy for service.getJSON method and return response
    spyOn(service, "getJSON").and.returnValue(response);
    expect(localStorage.getItem("heroes-data")).toBeFalsy();
    component.callHeroList();
    expect(service.getJSON).toHaveBeenCalled();
  });
});
