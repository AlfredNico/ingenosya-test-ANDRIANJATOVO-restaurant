import { CommandeService } from './../../services/commande.service';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: MenuComponent,
        data: { breadcrumb: 'Commande' },
      },
    ]),
  ],
  providers: [CommandeService],
})
export class MenuModule {}
