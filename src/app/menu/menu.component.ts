import { Component, Input } from "@angular/core";

@Component({
  selector: 'menu',
  template: `
  <div *ngFor="let item of menuItems">
    <p>{{item}}</p>
  </div>
  `,
  styleUrls: ['./menu.component.css'],
})
export class Menu {
  @Input() menuItems: string[] = [];
}
