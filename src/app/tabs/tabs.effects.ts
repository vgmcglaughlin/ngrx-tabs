import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { flatMap } from 'rxjs/operators';

import {
  POPULATE_TABS_TYPE,
  SelectTabAction,
} from './tabs.actions';

@Injectable()
export class TabEffects {
  constructor(private actions: Actions) {}

  @Effect() populateTabs = this.actions.ofType(POPULATE_TABS_TYPE).pipe(
    flatMap((action: any) => {
      if (action.payload.length > 0) {
        return Observable.of(new SelectTabAction(action.payload[0].id));
      }
      return Observable.of();
    })
  );
}
