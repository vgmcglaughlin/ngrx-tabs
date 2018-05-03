import { ActionReducerMap } from '@ngrx/store';

import { ContentItem } from './content-item.model';
import { ContentItemWireFormat } from './content-item.wire-format';
import {
  POPULATE_CONTENT_REQUEST_TYPE,
  POPULATE_CONTENT_RESPONSE_TYPE,
  RESET_CONTENT_TYPE,
} from './content.actions';

export function contentReducer(content: ContentItem[], action: any): ContentItem[] {
  switch (action.type) {
    case POPULATE_CONTENT_RESPONSE_TYPE:
      return toContentItems(action.payload);
    case RESET_CONTENT_TYPE:
      return [];
    case POPULATE_CONTENT_REQUEST_TYPE:
    default:
      return content;
  }
}

function toContentItems(contentWireItems: ContentItemWireFormat[]): ContentItem[] {
  return contentWireItems.map(item => {
    return new ContentItem(item);
  });
}

export interface ContentState {
  content: ContentItem[];
}

// could move to single reducer that took whole store as input
export const reducers: ActionReducerMap<ContentState> = {
  content: contentReducer,
};


