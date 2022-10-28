import { Component } from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: './lifecycle.component.html',
  styles: [],
})
export class LifecycleComponent {
  public data: string[] = [];

  ngOnChanges() {
    this.data.push('ngOnChanges');
  }

  ngOnInit() {
    this.data.push('ngOnInit');
  }
}
