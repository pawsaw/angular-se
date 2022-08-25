import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationTarget } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _router: Router) {}

  title = 'bookm';

  navigationTriggered(target: NavigationTarget): void {
    this._router.navigate([target]);
  }
}
