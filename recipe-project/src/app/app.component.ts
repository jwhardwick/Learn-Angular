import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showRecipes = false;
  showShoppingList = true;

  onShowRecipes() {
    this.showRecipes = true;
    this.showShoppingList = false;
  }

  onShowShoppingList() {
    this.showRecipes = false;
    this.showShoppingList = true;
  }
}
