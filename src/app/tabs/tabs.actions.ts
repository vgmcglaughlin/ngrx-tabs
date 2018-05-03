import { Action } from '@ngrx/store';

import { Tab } from './tab.model';

export const POPULATE_TABS_TYPE =  'tabs/populate';
export class PopulateTabsAction implements Action {
  readonly type: string = POPULATE_TABS_TYPE;
  payload: Tab[];

  constructor(tabs: Tab[]) {
    this.payload = tabs;
  }
}

export const SELECT_TAB_TYPE = 'tabs/select';
export class SelectTabAction implements Action {
  readonly type: string = SELECT_TAB_TYPE;
  payload: string;

  constructor(tabId: string) {
    this.payload = tabId;
  }
}
