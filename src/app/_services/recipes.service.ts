import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class RecipesService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<{ meals: any[] }> {
    return this.http.get<{ meals: any[] }>(this.apiUrl);
  }
}
