import { Injectable } from '@angular/core';
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Rx";

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class DiscardChangesGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
