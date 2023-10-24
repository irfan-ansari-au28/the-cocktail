import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AppBackgroundHeighlightDirective } from './directive/backgroundHighlight.directive';
import { CardShadowDirective } from './directive/card-shadow-directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CocktailListComponent,
    CocktailComponent,
    IngredientComponent,
    AppBackgroundHeighlightDirective,
    CardShadowDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
