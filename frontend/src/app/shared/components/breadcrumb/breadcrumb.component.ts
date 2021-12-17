import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ChildActivationEnd,
  NavigationEnd,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { IBreadCrumb } from 'src/app/interfaces/ibread-crumb';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <ol class="breadcrumb">
      <li *ngFor="let breadcrumb of breadcrumbs">
        <span
          style="cursor: pointer;"
          [routerLink]="breadcrumb.url"
          routerLinkActive="router-link-active"
        >
          {{ breadcrumb.label }}
        </span>
      </li>
    </ol>
  `,
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[] = [];

  constructor(private _router: Router) {
    this._router.events.subscribe((data) => {
      if (data instanceof ChildActivationEnd) {
        this.buildBreadCrumb(data.snapshot);
      }
    });
  }

  ngOnInit(): void {
    this._router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.buildBreadCrumb(data.state.root);
      }
    });
  }

  /**
   * Recursively build breadcrumb according to activated route.
   * @param route
   * @param url
   * @param breadcrumbs
   */
  buildBreadCrumb(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: IBreadCrumb[] = []
  ): IBreadCrumb[] {
    const label =
      route.firstChild && route.firstChild.routeConfig?.data
        ? route.firstChild.routeConfig?.data.breadcrumb
        : '';
    const path =
      route.firstChild && route.firstChild.routeConfig
        ? route.firstChild.routeConfig.path
        : '';

    const newUrl = path ? `${url}/${path}` : url;
    const breadcrumb: IBreadCrumb = {
      label,
      url: newUrl,
    };

    this.breadcrumbs =
      breadcrumb.label != '' ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild && route.firstChild?.root) {
      this.buildBreadCrumb(route.firstChild, newUrl, this.breadcrumbs);
    }

    return this.breadcrumbs;
  }
}
