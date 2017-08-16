import {CaseStyle, DocumentType, IntegerType} from "kryo";
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
      xMin: {type: new IntegerType()},
      xMax: {type: new IntegerType()},
      yMin: {type: new IntegerType()},
      yMax: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
