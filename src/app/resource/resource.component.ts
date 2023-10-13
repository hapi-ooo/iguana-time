import { Component, Input } from '@angular/core';

@Component({
  selector: 'resource',
  template: `
    <div class="resource-container">
      <p class="name">{{resource.name}}</p>
      <p class="quantity">{{resource.quantity}}</p>
      <p class="capacity">{{resource.capacity}}</p>
    </div>
  `,
  styleUrls: ['./resource.component.scss'],
})
export class Resource {
  @Input() resource!: { name: string, quantity: number | string, capacity: number | string };
}
