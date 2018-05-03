import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { flatMap } from 'rxjs/operators';

import { PopulateContentResponseAction, POPULATE_CONTENT_REQUEST_TYPE } from './content.actions';
import { SAMPLE_CONTENT } from './sample-content';

@Injectable()
export class ContentEffects {
  constructor(private actions: Actions) {}

  @Effect() populateContent = this.actions.ofType(POPULATE_CONTENT_REQUEST_TYPE).pipe(
    flatMap(val => {
      return Observable.of(new PopulateContentResponseAction({
        payload: this.generateContent(),
      }));
    })
  );

  // choose random-ish data from the sample content
  // if this actually came from a network request, would need to sanitize
  private generateContent() {
    const minItems = 2;
    const maxItems = SAMPLE_CONTENT.length;
    const numItems = Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
    // shuffle trick found here: https://css-tricks.com/snippets/javascript/shuffle-array/
    const shuffledItems = [...SAMPLE_CONTENT].sort(() => 0.5 - Math.random());
    return shuffledItems.slice(0, numItems);
  }
}
