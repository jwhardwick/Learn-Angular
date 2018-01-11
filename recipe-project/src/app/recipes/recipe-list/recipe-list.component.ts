import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spaghet',
      'Somebody toucha my spaghet',
      'http://i0.kym-cdn.com/entries/icons/mobile/000/025/054/SOMEBODY_TOUCHA_MY_SPAGHET.jpg'
    ),
    new Recipe(
      'Walnut Loaf',
      'GFDFCITY',
      'http://d3cizcpymoenau.cloudfront.net/images/21148/SFS_zucchini_bread-31.jpg'
    )
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }

  constructor() { }

  ngOnInit() {
  }

}
