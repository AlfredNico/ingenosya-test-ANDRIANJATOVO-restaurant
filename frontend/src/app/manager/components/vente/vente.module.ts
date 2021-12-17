import { VenteComponent } from './vente.component';
import { VenteService } from './../../services/vente.service';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VenteComponent],
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
  providers: [VenteService],
})
export class VenteModule {}
