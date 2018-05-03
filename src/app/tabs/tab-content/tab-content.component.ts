import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Selectable } from '../selectable';
import { TabsState } from '../tabs.reducer';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabContentComponent extends Selectable {

  @Input() readonly id: string;

  constructor(store: Store<TabsState>) {
    super(store);
  }
}
