import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-drawer-container class="drawer-container">
      <mat-drawer mode="side" opened style="min-width: 20vw">
        <div fxLayout="column">
          <h3 routerLink="/" fxLayoutAlign="center center" class="w-75 mx-auto">
            GESTION D' UN RESTAURANT
          </h3>
          <div fxLayout="column" fxLayoutAlign="start start">
            <a
              routerLink="gestion-repas"
              class="w-100 py-2 text-left nav-item"
              routerLinkActive="active"
              mat-button
              >Gestion des répas
            </a>
            <a
              routerLink="gestion-stock"
              class="w-100 py-2 text-left nav-item"
              routerLinkActive="active"
              mat-button
              >Gestion des stock
            </a>
            <a
              routerLink="gestion-vente"
              class="w-100 py-2 text-left nav-item"
              routerLinkActive="active"
              mat-button
              >Gestion des vente
            </a>
            <a
              routerLink="gestion-menu"
              class="w-100 py-2 text-left nav-item"
              routerLinkActive="active"
              mat-button
              >Gestion menu
            </a>
            <a
              routerLink="gestion-benefice"
              class="w-100 py-2 text-left nav-item"
              routerLinkActive="active"
              mat-button
              >Gestion benefice
            </a>
          </div>
        </div>
      </mat-drawer>
      <mat-drawer-content>
        <mat-toolbar>
          <app-breadcrumb></app-breadcrumb>
          <span style="flex: 1 1 auto;"></span>
          <!-- <button
            mat-icon-button
            class="example-icon favorite-icon"
            aria-label="Example icon-button with heart icon"
          >
            <mat-icon>favorite</mat-icon>
          </button>
          <button
            mat-icon-button
            class="example-icon"
            aria-label="Example icon-button with share icon"
          >
            <mat-icon>share</mat-icon>
          </button> -->
        </mat-toolbar>
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      .drawer-container {
        width: 100vw;
        height: 100vh;
        margin: 0;
      }
    `,
  ],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
