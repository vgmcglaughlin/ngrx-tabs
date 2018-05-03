import * as uuid from 'uuid/v4';

export class ContentItem {
  id: string;
  title?: string;
  content?: string;

  constructor(json?: any) {
    if (json) {
      this.id = json.id === null || json.id === undefined ? uuid() : json.id;
      this.title = json.title;
      this.content = json.content;
    } else {
      this.id = uuid();
    }
  }
}
