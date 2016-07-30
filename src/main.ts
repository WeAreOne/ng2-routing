import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from "@angular/forms";

import { AppComponent, environment, appRouterProviders } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms()
]);
