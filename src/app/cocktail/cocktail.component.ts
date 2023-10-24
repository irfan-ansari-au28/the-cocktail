import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit {
  cocktail: any = {};
  ingredients: string[] = [];
  random = Math.floor(Math.random() * 59);

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.subjectService.cocktailData$.subscribe((data) => {
      console.log(data, 'ingre');
      this.ingredients = this.extractIngredients(data);
      console.log(this.ingredients);
      this.cocktail = data;
    });
    this.subjectService.cocktailName$.subscribe((data) =>
      console.log(data, 'name')
    );
  }

  extractIngredients(cocktail: any): string[] {
    const ingredients: string[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail['strIngredient' + i];
      const measure = cocktail['strMeasure' + i];

      if (ingredient && measure) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }

    return ingredients;
  }
}
