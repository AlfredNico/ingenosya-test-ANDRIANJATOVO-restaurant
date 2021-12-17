import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
