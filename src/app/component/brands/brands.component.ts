import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service'; 
import { Brand } from '../../core/interfaces/brands'; 

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
countWishList() {
throw new Error('Method not implemented.');
}
wishList() {
throw new Error('Method not implemented.');
}
deletewishlistItem(arg0: any) {
throw new Error('Method not implemented.');
}
addToCart(arg0: any) {
throw new Error('Method not implemented.');
}
  allBrands: Brand[] = [];
  selectedBrand: Brand | null = null;

  constructor(private brandsService: BrandsService) {}

  ngOnInit() {
    this.getBrands();
  }

  getBrands() {
    this.brandsService.getAllBrands().subscribe({
      next: (brands) => {
        this.allBrands = brands;
      },
      error: (error) => {
        console.error('Error fetching brands:', error);
      }
    });
  }

  viewBrand(id: string) {
    this.selectedBrand = this.allBrands.find(brand => brand._id === id) || null;
  }

  trackBrand(index: number, brand: Brand) {
    return brand._id; 
  }
}