import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cookie', 'Cokie wiht coffee', 'http://delivery-menu.exteen.com/images/theme/donutmuffins_front.jpg'),
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.recipes[0].name);
  }

}
