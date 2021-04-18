import { Component } from '@angular/core';
import { OnDemandPreloadService } from '../../strategies/on-demand-preload.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private onDemandPreloadService: OnDemandPreloadService) {}

  preloadChunk(url: string): void {
    this.onDemandPreloadService.startPreload(url);
  }
}
