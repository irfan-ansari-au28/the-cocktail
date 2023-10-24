import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { IngredientComponent } from './ingredient/ingredient.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cocktails', component: CocktailListComponent },
  { path: 'cocktails/:name', component: CocktailComponent },
  { path: 'ingredient/:id', component: IngredientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
