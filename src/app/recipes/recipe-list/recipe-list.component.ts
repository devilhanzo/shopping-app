import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hawaiian Pizza',
    'My Hawaiian pizza',
    'http://pizzahouse.nz/wp-content/uploads/2016/03/hawaiian-pizza.png'),
    new Recipe('Baked Chicken Wings',
    'My Chiken Wings',
    'http://cf.yellowblissroad.com/wp-content/uploads/2015/02/Baked-Chicken-Wings.jpg'),
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.recipes[0].name);
  }

}
