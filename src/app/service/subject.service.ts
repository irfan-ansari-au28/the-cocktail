import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private cocktailNameSubject = new BehaviorSubject<string>('Mojito');
  cocktailName$ = this.cocktailNameSubject.asObservable();

  updateCocktailName(newValue: string) {
    this.cocktailNameSubject.next(newValue);
  }

  private cocktailDataSubject = new BehaviorSubject<Array<any>>([]);
  cocktailData$ = this.cocktailDataSubject.asObservable();

  updateCocktailData(newValue: Array<null>) {
    this.cocktailDataSubject.next(newValue);
  }
}
