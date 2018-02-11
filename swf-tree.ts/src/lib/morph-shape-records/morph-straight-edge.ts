import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $MorphShapeRecordType, MorphShapeRecordType } from "./_type";

export interface MorphStraightEdge {
  type: MorphShapeRecordType.MorphStraightEdge;
  startDelta: Vector2D;
  endDelta: Vector2D;
}

export const $MorphStraightEdge: DocumentIoType<MorphStraightEdge> = new DocumentType<MorphStraightEdge>({
  properties: {
    type: {
      type: new LiteralType({
        type: $MorphShapeRecordType,
        value: MorphShapeRecordType.MorphStraightEdge as MorphShapeRecordType.MorphStraightEdge,
      }),
    },
    startDelta: {type: $Vector2D},
    endDelta: {type: $Vector2D},
  },
  changeCase: CaseStyle.SnakeCase,
});
