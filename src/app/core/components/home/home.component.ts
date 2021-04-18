import { Component } from '@angular/core';
import { OnDemandPreloadService } from '../../strategies/on-demand-preload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private onDemandPreloadService: OnDemandPreloadService) {}

  preloadAll(): void {
    this.onDemandPreloadService.startPreload('*');
  }
}
