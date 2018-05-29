import {Component} from '@angular/core';
import {MicroAppsManager} from '@frontends/shell-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    const appManager = new MicroAppsManager();
    appManager.initApps([{name: 'team-details', entryUrl: 'http://localhost:30001'}])
  }

}
