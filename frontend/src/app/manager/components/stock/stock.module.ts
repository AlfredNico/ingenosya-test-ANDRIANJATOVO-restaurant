import { StockService } from '../../services/stock.service';
import { SharedModule } from '../../../shared/shared.module';
import { StockComponent } from 'src/app/manager/components/stock/stock.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [StockComponent, AddOrEditComponent],
  imports: [
    SharedModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: StockComponent,
        data: { breadcrumb: 'Stock' },
      },
      {
        path: 'ajoute',
        pathMatch: 'full',
        component: AddOrEditComponent,
        data: { breadcrumb: 'Ajout stock' },
      },
    ]),
  ],
  providers: [StockService],
  entryComponents: [AddOrEditComponent],
})
export class StockModule {}
