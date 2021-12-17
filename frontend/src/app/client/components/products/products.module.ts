import { CommandeDialogComponent } from './commande-dialog/commande-dialog.component';
import { SharedClientModule } from './../../shared-client.module';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent, CommandeDialogComponent],
  imports: [
    SharedClientModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProductsComponent,
      },
    ]),
  ],
  entryComponents: [CommandeDialogComponent],
})
export class ProductsModule {}
