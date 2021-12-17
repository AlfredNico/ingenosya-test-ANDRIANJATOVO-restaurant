import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MenuComponent, data: { breadcrumb: 'Menu' }, },
    ]),
  ],
})
export class MenuModule {}
