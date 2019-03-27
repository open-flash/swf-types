import { $Sint16 } from "kryo/builtins/sint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16 } from "semantic-types";

export interface Rect {
  xMin: Sint16;
  xMax: Sint16;
  yMin: Sint16;
  yMax: Sint16;
}

export const $Rect: DocumentIoType<Rect> = new DocumentType<Rect>({
  properties: {
    xMin: {type: $Sint16},
    xMax: {type: $Sint16},
    yMin: {type: $Sint16},
    yMax: {type: $Sint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
