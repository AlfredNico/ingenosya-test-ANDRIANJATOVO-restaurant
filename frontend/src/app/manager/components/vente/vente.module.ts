import { VenteComponent } from './vente.component';
import { VenteService } from './../../services/vente.service';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AddPriceDialogComponent } from './add-price-dialog/add-price-dialog.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@NgModule({
  declarations: [VenteComponent, AddPriceDialogComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: VenteComponent,
        data: { breadcrumb: 'Vente produit' },
      },
    ]),
  ],
  providers: [VenteService, SnackbarService],
  entryComponents: [AddPriceDialogComponent],
})
export class VenteModule {}
