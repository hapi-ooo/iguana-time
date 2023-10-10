import { Component, ElementRef, Input, OnInit } from "@angular/core";

@Component({
  selector: 'demo',
  template: `
  <h3>GridDemo class: {{className}}</h3>
  `,
})
export class GridDemo implements OnInit {
  @Input() data: string = '';
  @Input() section: string = '';
  className: string = '';

  constructor(private elRef: ElementRef){
  }

  ngOnInit(): void {
    this.className = this.elRef.nativeElement.className =
      this.section + '-' + this.data;
  }
}
