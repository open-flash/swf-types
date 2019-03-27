import { $Sint32 } from "kryo/builtins/sint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint32 } from "semantic-types";

export interface Vector2D {
  x: Sint32;
  y: Sint32;
}

export const $Vector2D: DocumentIoType<Vector2D> = new DocumentType<Vector2D>({
  properties: {
    x: {type: $Sint32},
    y: {type: $Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
