import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../service/cocktail.service';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktailTypes: any = [];
  cocktailName: string = '';

  constructor(
    private cocktailService: CocktailService,
    private subjectService: SubjectService
  ) {}

  ngOnInit() {
    this.subjectService.cocktailName$.subscribe((data) => {
      this.cocktailName = data;
    });

    this.cocktailService
      .getCocktailsByName(this.cocktailName)
      .subscribe((data) => {
        this.cocktailTypes = data.drinks;
        console.log(this.cocktailTypes);
        // Update cocktail array
      });
  }

  setCocktailName(name: string) {
    this.subjectService.updateCocktailName(name);
  }

  setCocktailData(data: any) {
    this.subjectService.updateCocktailData(data);
    this.setCocktailName(data.strDrink);
  }
}
