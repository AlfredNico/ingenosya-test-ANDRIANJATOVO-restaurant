import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'produit',
            loadChildren: () =>
              import('src/app/client/components/products/products.module').then(
                (m) => m.ProductsModule
              ),
          },
          {
            path: '',
            redirectTo: 'produit',
            pathMatch: 'full',
          },
        ],
      },
    ]),
  ],
})
export class ClientModule {}
