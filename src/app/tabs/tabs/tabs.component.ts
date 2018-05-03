import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { TabComponent } from '../tab/tab.component';
import { PopulateTabsAction } from '../tabs.actions';
import { TabsState } from '../tabs.reducer';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewInit {
  @ContentChildren(TabComponent)
  private tabViews: QueryList<TabComponent>;

  constructor(private store: Store<TabsState>) {}

  // limitation of this approach is that it will not reset if projected content IDs change
  // requires re-creating component
  ngAfterViewInit() {
    const tabData = this.tabViews.map(tabView => {
      return {
        id: tabView.id,
        isSelected: false,
      };
    });
    // not pretty, but we need to wait a cycle to change a child component after view init
    setTimeout(() => {
      this.store.dispatch(new PopulateTabsAction(tabData));
    });
  }
}
