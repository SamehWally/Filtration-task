import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss',
})
export class Recipes implements OnInit {

  meals: any[] = [];

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http
      .get<{ meals: any[] }>(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast'
      )
      .subscribe((res: any) => {
        this.meals = res.meals;
      });
  }
}
