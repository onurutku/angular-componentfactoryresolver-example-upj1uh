import { Component } from '@angular/core';

@Component({
  templateUrl: './hello.component.html',
})
export class HelloComponent {
  public name = 'Hello Component is here';

  constructor() {
    console.log('HelloComponent generated');
  }
}
