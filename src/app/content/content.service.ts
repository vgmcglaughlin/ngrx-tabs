import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { PopulateContentRequestAction } from './content.actions';
import { ContentState } from './content.reducer';

@Injectable()
export class ContentService {

  constructor(private store: Store<ContentState>) { }

  // this layer of indirection allows consistent error handling, retries, cancels, etc
  // without knowledge by the consuming component
  requestContent() {
    this.store.dispatch(new PopulateContentRequestAction());
  }
}
