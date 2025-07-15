import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TastyPastries } from "./features/tasty-pastries/tasty-pastries";
import { HowWeWork } from "./features/how-we-work/how-we-work";
import { AboutUs } from "./features/about-us/about-us";
import { Recipes } from "./features/recipes/recipes";
import { Testimonials } from "./features/testimonials/testimonials";
import { Contact } from "./features/contact/contact";

@Component({
  selector: 'app-root',
  imports: [ TastyPastries, HowWeWork, AboutUs, Recipes, Testimonials, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('peachy-pup-bakery');
}
