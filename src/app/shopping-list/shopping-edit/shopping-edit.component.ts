import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef;
  @ViewChild('amountInput') amountImputRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const newIngredient() = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.nameInputRef.nativeElement.value
    );
    console.log(newIngredient);
    this.ingredientAdded.emit(newIngredient);
  }
}
