import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ContentService, ContentState, ResetContentAction } from './content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public content = this.store.select('content');

  constructor(
    private store: Store<ContentState>,
    private contentService: ContentService,
  ) {}

  populateContent() {
    this.contentService.requestContent();
  }

  reset() {
    this.store.dispatch(new ResetContentAction());
  }
}
