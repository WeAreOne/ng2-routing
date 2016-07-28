import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from "@angular/common";

import { AppComponent, environment, appRouterProviders } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  // { provide: LocationStrategy, useClass: HashLocationStrategy }, // .../#/about/
  // { provide: LocationStrategy, useClass: PathLocationStrategy } // .../about/
]);
