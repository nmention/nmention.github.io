import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-synopsis',
  template: `<p>{{ synopsis }}</p>`
})
export class synopsis {
  @Input() synopsis ="";
}
