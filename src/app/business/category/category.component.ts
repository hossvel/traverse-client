import { Component } from '@angular/core';
import { Category } from './interface/category';
import { CategoryService } from './service/category.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export default class CategoryComponent {

  categoryList: Category[]=[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getcategories()
  }

  getcategories() {
    this.categoryService.getCategories().subscribe({
      
      next: (result) => {
        console.log(result);
        this.categoryList = result.categoryResponse.category;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
