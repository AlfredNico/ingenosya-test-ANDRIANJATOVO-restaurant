import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routers: Routes = [
  {
    path: 'manager-space',
    loadChildren: () =>
      import('src/app/manager/manager.module').then((m) => m.ManagerModule),
  },
  {
    path: 'client-space',
    loadChildren: () =>
      import('src/app/client/client.module').then((m) => m.ClientModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'manager-space' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
