import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroInformationComponent } from "./hero-information.component";
import { HeroInformationService } from "./hero-information.service";

describe("Component: Login", () => {
  let component: HeroInformationComponent;
  let fixture: ComponentFixture<HeroInformationComponent>;
  let heroInformationService: HeroInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroInformationComponent],
      providers: [HeroInformationService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(HeroInformationComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // Service provided to the TestBed
    heroInformationService = TestBed.get(HeroInformationService);
  });

  it("Return false if information not found", () => {
    // spyOn(heroInformationService, "getHeroById").and.returnValue(false);
    expect(component.getInformation()).toBeFalsy();
    expect(heroInformationService.getHeroById).toHaveBeenCalled();
  });

  it("Return true if information found", () => {
    // spyOn(heroInformationService, "getHeroById").and.returnValue(true);
    expect(component.getInformation()).toBeTruthy();
    expect(heroInformationService.getHeroById).toHaveBeenCalled();
  });
});
