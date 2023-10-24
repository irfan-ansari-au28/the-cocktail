import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubjectService } from '../service/subject.service';
import { CocktailService } from '../service/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cocktails: Array<any> = [];
  isAlcoholic: boolean = false;

  constructor(
    private subjectService: SubjectService,
    private cocktailsService: CocktailService
  ) {}

  ngOnInit(): void {
    this.subjectService.cocktails$.subscribe((data) => {
      this.cocktails = data;
      console.log(data, 'home');
    });
  }

  setCocktailName(name: string) {
    this.subjectService.updateCocktailName(name);
  }
  //   {
  //     "strDrink": "110 in the shade",
  //     "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
  //     "idDrink": "15423"
  // }
  getDrinks(drinkType: string) {
    this.cocktailsService
      .getCocktailByAlcoholic(drinkType)
      .subscribe((data) => {
        this.subjectService.updateCocktails(data.drinks);
        console.log(data, 'alcoholic/NonAlcoholic');
      });
    this.isAlcoholic = true;
  }
}
