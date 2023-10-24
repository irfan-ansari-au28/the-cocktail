import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit {
  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.subjectService.cocktailData$.subscribe((data) =>
      console.log(data, 'ingre')
    );
    this.subjectService.cocktailName$.subscribe((data) =>
      console.log(data, 'name')
    );
  }
}
