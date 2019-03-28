import { $Sint32 } from "kryo/builtins/sint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint32 } from "semantic-types";

export interface Rect {
  xMin: Sint32;
  xMax: Sint32;
  yMin: Sint32;
  yMax: Sint32;
}

export const $Rect: DocumentIoType<Rect> = new DocumentType<Rect>({
  properties: {
    xMin: {type: $Sint32},
    xMax: {type: $Sint32},
    yMin: {type: $Sint32},
    yMax: {type: $Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
