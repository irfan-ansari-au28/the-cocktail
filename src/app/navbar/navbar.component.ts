import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  formData: any = {};
  cocktails: any = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.cocktails$.subscribe((data: any) => {
      this.cocktails = data;
    });
  }

  onSubmit() {
    console.log(this.formData, 'this.searchterm');
    const filteredData = this.cocktails.filter((cocktail: any) => {
      cocktail.strDrink
        .toLowerCase()
        .includes(this.formData.search.toLowerCase());
    });
    console.log(filteredData, 'filteredData');

    this.subjectService.updateCocktails(filteredData);
  }
}
