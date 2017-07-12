import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16} from "semantic-types";

export interface Rect {
  xMin: Sint16;
  xMax: Sint16;
  yMin: Sint16;
  yMax: Sint16;
}

export namespace Rect {
  export interface Json {
    x_min: number;
    x_max: number;
    y_min: number;
    y_max: number;
  }

  export const type: DocumentType<Rect> = new DocumentType<Rect>({
    properties: {
      xMin: {type: new Int32Type()},
      xMax: {type: new Int32Type()},
      yMin: {type: new Int32Type()},
      yMax: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
