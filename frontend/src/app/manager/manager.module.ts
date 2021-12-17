import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SidenavComponent,
        data: { breadcrumb: 'Manager' },
        children: [
          {
            path: 'gestion-repas',
            loadChildren: () =>
              import('src/app/manager/components/repas/repas.module').then(
                (m) => m.RepasModule
              ),
          },
          {
            path: 'gestion-stock',
            loadChildren: () =>
              import('src/app/manager/components/stock/stock.module').then(
                (m) => m.StockModule
              ),
          },
          {
            path: 'gestion-menu',
            loadChildren: () =>
              import('src/app/manager/components/menu/menu.module').then(
                (m) => m.MenuModule
              ),
          },
          {
            path: 'gestion-vente',
            loadChildren: () =>
              import('src/app/manager/components/vente/vente.module').then(
                (m) => m.VenteModule
              ),
          },
          {
            path: 'gestion-benefice',
            loadChildren: () =>
              import(
                'src/app/manager/components/benefices/benefices.module'
              ).then((m) => m.BeneficesModule),
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'gestion-repas',
          },
        ],
      },
    ]),
  ],
})
export class ManagerModule {}
