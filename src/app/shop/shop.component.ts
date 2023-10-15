import { Component } from "@angular/core";
import { SHOP_DATA } from "../data";
import { environment } from "src/environments/environment";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class Shop {
  assets = environment.Assets;
  dataSource = [
    ...SHOP_DATA,
    ...SHOP_DATA,
    ...SHOP_DATA,
  ];
}
