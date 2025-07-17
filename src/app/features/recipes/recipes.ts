import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../_services/recipes.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.scss'],
})
export class Recipes implements OnInit {
  recipes: any[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((res) => {
      this.recipes = res.meals;
    });
  }
}
