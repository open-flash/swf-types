import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $MorphShapeRecordType, MorphShapeRecordType } from "./_type";

export interface MorphCurvedEdge {
  type: MorphShapeRecordType.MorphCurvedEdge;
  startControlDelta: Vector2D;
  endControlDelta: Vector2D;
  startAnchorDelta: Vector2D;
  endAnchorDelta: Vector2D;
}

export const $MorphCurvedEdge: DocumentIoType<MorphCurvedEdge> = new DocumentType<MorphCurvedEdge>({
  properties: {
    type: {
      type: new LiteralType({
        type: $MorphShapeRecordType,
        value: MorphShapeRecordType.MorphCurvedEdge as MorphShapeRecordType.MorphCurvedEdge,
      }),
    },
    startControlDelta: {type: $Vector2D},
    endControlDelta: {type: $Vector2D},
    startAnchorDelta: {type: $Vector2D},
    endAnchorDelta: {type: $Vector2D},
  },
  changeCase: CaseStyle.SnakeCase,
});
