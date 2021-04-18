import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { goodConnection } from './utils';

@Injectable({ providedIn: 'root' })
export class NetworkAwareStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return goodConnection() ? fn() : EMPTY;
  }
}
