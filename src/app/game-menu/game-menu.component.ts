import { Component } from "@angular/core";
import { environment } from './../../environments/environment';

@Component({
  selector: 'game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss'],
})
export class GameMenu {
  assets = environment.Assets;
}
