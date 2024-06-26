import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomerMainModule } from './CustomerApp/CustomerApp.CustomerMainModule';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CustomerMainModule)
  .catch(err => console.error(err));
