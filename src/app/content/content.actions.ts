import { Action } from '@ngrx/store';
import { ContentItemWireFormat } from './content-item.wire-format';

export const POPULATE_CONTENT_REQUEST_TYPE =  'app/content/populate/request';
export class PopulateContentRequestAction implements Action {
  readonly type: string = POPULATE_CONTENT_REQUEST_TYPE;
}

export const POPULATE_CONTENT_RESPONSE_TYPE = 'app/content/populate/response';
export class PopulateContentResponseAction implements Action {
  readonly type: string = POPULATE_CONTENT_RESPONSE_TYPE;
  payload: ContentItemWireFormat[];

  constructor(json: any) {
    this.payload = json.payload;
  }
}

export const RESET_CONTENT_TYPE =  'app/content/reset';
export class ResetContentAction implements Action {
  readonly type: string = RESET_CONTENT_TYPE;
}
