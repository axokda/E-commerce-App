import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Brand } from '../../core/interfaces/brands';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  private readonly _BrandsService = inject(BrandsService)

  allBrands: Brand[] = []



  getBrands() {
    this._BrandsService.getAllBrands().subscribe({

      next: (res:any) => {
        this.allBrands = res.data
        console.log(this.allBrands)
      },

    })
  }


  ngOnInit(): void {

    this.getBrands()

  }


}