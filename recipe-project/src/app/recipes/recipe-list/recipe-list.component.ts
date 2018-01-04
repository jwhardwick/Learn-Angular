import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A recipe to test', 'http://d3cizcpymoenau.cloudfront.net/images/21148/SFS_zucchini_bread-31.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
