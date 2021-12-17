import { BeneficesComponent } from './benefices.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BeneficesComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: BeneficesComponent,
        data: { breadcrumb: 'Benefice' },
      },
    ]),
  ],
})
export class BeneficesModule {}
