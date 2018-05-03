import { ActionReducerMap } from '@ngrx/store';

import { POPULATE_TABS_TYPE, SELECT_TAB_TYPE } from './tabs.actions';
import { Tab } from './tab.model';

export function tabsReducer(tabs: Tab[], action: any): Tab[] {
  switch (action.type) {
    case POPULATE_TABS_TYPE:
      return [...action.payload];
    case SELECT_TAB_TYPE:
      const updatedTabs = tabs.map(tab => {
        return {
          id: tab.id,
          isSelected: tab.id === action.payload,
        };
      });
      return updatedTabs;
    default:
      return tabs;
  }
}

export interface TabsState {
  tabs: Tab[];
}

export const reducers: ActionReducerMap<TabsState> = {
  tabs: tabsReducer,
};
