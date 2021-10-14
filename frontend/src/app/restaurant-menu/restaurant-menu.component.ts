import { Component, OnInit } from '@angular/core';
import { MenusService } from '../_services/menus.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  dishes = [
    {
      nombre_plato: "Aji de gallina",
      precio: 100,
      created_date: "12/12/12",
      modified_date: "12/12/12"
    }
  ]

  constructor(
    private menuService:MenusService
  ) { }

  ngOnInit(): void {
    this.menuService.getData().subscribe((data) => {
      this.dishes = data;
      console.log(data);
    })
  }

}
