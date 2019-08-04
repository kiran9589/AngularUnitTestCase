import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"]
})
export class HeroFormComponent implements OnInit {
  public heroFom: FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    DOB: new FormControl("", Validators.required),
    contact: new FormControl("", Validators.required)
  });

  constructor(private _router: Router) {}

  ngOnInit() {}

  public createHero() {
    const heroesData = JSON.parse(localStorage.getItem("heroes-data"));
    if (this.heroFom.valid) {
      if (heroesData && heroesData.length) {
        let hero: Hero = this.heroFom.value;
        hero["id"] = (heroesData.length + 1).toString();
        hero["image"] = "placeholder.png";
        heroesData.push(this.heroFom.value);
        localStorage.setItem("heroes-data", JSON.stringify(heroesData));
      }
      console.log(this.heroFom.value);
      this._router.navigate(["/"]);
    }
  }
}
