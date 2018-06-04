import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [{
    name: 'A new recipe',
    description: 'test recipe',
    imagePath: 'https://d2gk7xgygi98cy.cloudfront.net/6-3-large.jpg'
  },
  new Recipe('A Test Recipe',
  'This is a simple test.',
  'https://www.tablespoon.com/-/media/Images/CollectionHeroes/16/05/summer-pinterest_HERO_680x384.jpg?W=800')
];

  constructor() { }

  ngOnInit() {
  }

}
