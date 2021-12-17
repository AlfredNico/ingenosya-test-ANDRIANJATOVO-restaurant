import { RepasService } from './../../../shared/services/repas.service';
import { SharedModule } from './../../../shared/shared.module';
import { RepasComponent } from 'src/app/manager/components/repas/repas.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import { AddElementComponent } from './add-element/add-element.component';
import { AddRepasComponent } from './add-repas/add-repas.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RecetteDialogComponent } from './recette-dialog/recette-dialog.component';

@NgModule({
  declarations: [
    RepasComponent,
    AddComponent,
    AddElementComponent,
    AddRepasComponent,
    RecetteDialogComponent,
  ],
  imports: [
    SharedModule,
    MatAutocompleteModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RepasComponent,
        data: { breadcrumb: 'Repa' },
      },
      {
        path: 'ajout',
        component: AddComponent,
        data: { breadcrumb: 'Ajout repas' },
      },
    ]),
  ],
  providers: [RepasService],
  entryComponents: [RecetteDialogComponent],
})
export class RepasModule {}
