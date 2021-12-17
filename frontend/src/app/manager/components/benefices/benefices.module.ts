import { SharedModule } from './../../../shared/shared.module';
import { BeneficesComponent } from './benefices.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommandeService } from '../../services/commande.service';

@NgModule({
  declarations: [BeneficesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: BeneficesComponent,
        data: { breadcrumb: 'Benefice' },
      },
    ]),
  ],
  providers: [CommandeService],
})
export class BeneficesModule {}
