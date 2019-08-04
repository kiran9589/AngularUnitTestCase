import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Hero } from "../hero";
import { HeroInformationService } from "./hero-information.service";

@Component({
  selector: "app-hero-information",
  templateUrl: "./hero-information.component.html",
  styleUrls: ["./hero-information.component.css"],
  providers: [HeroInformationService]
})
export class HeroInformationComponent implements OnInit {
  private hero: Hero;
  public paramId = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroInformationService: HeroInformationService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.paramId = +params["id"];
      // debugger;
      // setTimeout(() => {
      //   this.hero = this._heroInformationService.getHeroById(this.paramId)[0];
      // }, 1000);
    });
  }

  ngOnInit() {
    // this._activatedRoute.params.subscribe(params => {
    //   this.paramId = params["id"];
    //   // debugger;
    //   setTimeout(() => {
    //     this.hero = this._heroInformationService.getHeroById(this.paramId)[0];
    //   }, 1000);
    // });
    debugger;
    this.hero = this._heroInformationService.getHeroById(this.paramId)[0];
  }

  getInformation() {}
}
