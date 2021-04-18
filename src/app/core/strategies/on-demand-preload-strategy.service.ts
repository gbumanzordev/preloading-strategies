import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import {
  OnDemandPreloadOptions,
  OnDemandPreloadService,
} from './on-demand-preload.service';

@Injectable({ providedIn: 'root', deps: [OnDemandPreloadService] })
export class OnDemandPreloadStrategy implements PreloadingStrategy {
  private preloadOnDemand$: Observable<OnDemandPreloadOptions>;

  constructor(private onDemandPreloadService: OnDemandPreloadService) {
    this.preloadOnDemand$ = this.onDemandPreloadService.state;
  }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.preloadOnDemand$.pipe(
      mergeMap((preloadOptions) => {
        const shouldPreload = this.preloadCheck(route, preloadOptions);
        return shouldPreload ? fn() : EMPTY;
      })
    );
  }

  preloadCheck(route: Route, preloadOptions: OnDemandPreloadOptions): boolean {
    return (
      route.data &&
      route.data.preload &&
      [route.path, '*'].includes(preloadOptions.routePath) &&
      preloadOptions.preload
    );
  }
}
