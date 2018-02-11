import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $ShapeRecordType, ShapeRecordType } from "./_type";

export interface StraightEdge {
  type: ShapeRecordType.StraightEdge;
  delta: Vector2D;
}

export const $StraightEdge: DocumentIoType<StraightEdge> = new DocumentType<StraightEdge>({
  properties: {
    type: {
      type: new LiteralType({
        type: $ShapeRecordType,
        value: ShapeRecordType.StraightEdge as ShapeRecordType.StraightEdge,
      }),
    },
    delta: {type: $Vector2D},
  },
  changeCase: CaseStyle.SnakeCase,
});
