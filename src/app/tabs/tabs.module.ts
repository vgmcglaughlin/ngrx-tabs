import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab-content/tab-content.component';

import { reducers } from './tabs.reducer';
import { TabEffects } from './tabs.effects';

const COMPONENTS = [ TabsComponent, TabComponent, TabContentComponent ];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ TabEffects ]),
    StoreModule.forFeature('tabs', reducers, {
      initialState: {
        tabs: [],
      }
    }),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class TabsModule { }
