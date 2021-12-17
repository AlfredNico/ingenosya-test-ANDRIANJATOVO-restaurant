import { LayoutComponent } from './client/components/layout/layout.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BreadcrumbComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule, // for routers
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
