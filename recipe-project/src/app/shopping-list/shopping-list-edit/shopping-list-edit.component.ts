import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() ingredientWasAdded = new EventEmitter<{ingredient: Ingredient}>();
  @Output() ingredientWasDeleted = new EventEmitter<void>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    if (ingName && ingAmount) {
      this.ingredientWasAdded.emit({
        ingredient: new Ingredient(ingName, ingAmount)
      });
      this.clearForms();
    }
  }

  deleteIngredient() {
    this.ingredientWasDeleted.emit();
  }

  clearForms() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

}
