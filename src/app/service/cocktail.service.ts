import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiBaseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCocktailsByName(name: string): Observable<any> {
    const url = `${this.apiBaseUrl}/search.php?s=${name}`;
    return this.http.get(url);
  }

  getCocktailById(id: string): Observable<any> {
    const url = `${this.apiBaseUrl}/lookup.php?i=${id}`;
    return this.http.get(url);
  }
  getCocktailByAlcoholic(alcoholic: string): Observable<any> {
    // www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
    // www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
    const url = `${this.apiBaseUrl}/filter.php?a=${alcoholic}`;
    return this.http.get(url);
  }
}
