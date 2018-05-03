import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ContentEffects, ContentService, reducers } from './content';
import { TabsModule } from './tabs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TabsModule,
    EffectsModule.forRoot([ ContentEffects ]),
    StoreModule.forRoot(reducers, {
      initialState: {
        content: [],
      },
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Tabs Store DevTools',
    }),
  ],
  providers: [ ContentService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
