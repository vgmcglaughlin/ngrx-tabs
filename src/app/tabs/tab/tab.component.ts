import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Selectable } from '../selectable';
import { SelectTabAction } from '../tabs.actions';
import { TabsState } from '../tabs.reducer';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent extends Selectable {

  @Input() readonly id: string;

  constructor(private store: Store<TabsState>) {
    super(store);
  }

  select() {
    this.store.dispatch(new SelectTabAction(this.id));
  }
}
