import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() showRecipesEvent = new EventEmitter<{}>();
    @Output() showShoppingListEvent = new EventEmitter<{}>();

    showRecipes() {
        this.showRecipesEvent.emit({});
    }

    showShoppingList() {
        this.showShoppingListEvent.emit({});
    }

}
