import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Category } from '../../core/interfaces/category';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
constructor( private _catogoriesService :CategoriesService) {
}
allCategories : Category[] = [];
getCategories(){

this._catogoriesService.getCategories().subscribe({
    next: (resp) => {this.allCategories = resp.data}
  })

}

ngOnInit(){
  this.getCategories()
}

}
