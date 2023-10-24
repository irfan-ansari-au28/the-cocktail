import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cocktails = [
    {
      id: 1,
      title: 'Mojito',
      thumbnail:
        'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
    },
    {
      id: 2,
      title: 'Margarita',
      thumbnail:
        'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    },
    {
      id: 3,
      title: 'Negroni',
      thumbnail:
        'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg',
    },
    {
      id: 4,
      title: 'Daiquiri',
      thumbnail:
        'https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg',
    },
    {
      id: 4,
      title: 'Daiquiri',
      thumbnail:
        'https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg',
    },
    {
      id: 4,
      title: 'Daiquiri',
      thumbnail:
        'https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg',
    },
  ];

  constructor(private subjectService: SubjectService) {}

  setCocktailName(name: string) {
    this.subjectService.updateCocktailName(name);
  }
}
