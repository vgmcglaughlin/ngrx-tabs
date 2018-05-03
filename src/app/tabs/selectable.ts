import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { TabsState } from './tabs.reducer';

export class Selectable implements OnDestroy {
  protected id: string;
  protected destroyed = new Subject<void>();

  public isSelected = this._store.select('tabs').pipe(
    takeUntil(this.destroyed),
    switchMap((store: any) => { // there's still something wrong here
      const mySelectable = store.tabs.find(tab => tab.id === this.id);
      return Observable.of(mySelectable && mySelectable.isSelected);
    }),
  );

  constructor(private _store: Store<TabsState>) {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
