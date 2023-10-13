import { Component } from "@angular/core";
import { RESOURCE_DATA } from "../data";

@Component({
  selector: 'resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceList {
  displayedColumns: string[] = ['name', 'quantity', 'capacity'];
  dataSource = RESOURCE_DATA;
}
