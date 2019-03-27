import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $ShapeRecordType, ShapeRecordType } from "./_type";

export interface CurvedEdge {
  type: ShapeRecordType.CurvedEdge;
  controlDelta: Vector2D;
  anchorDelta: Vector2D;
}

export const $CurvedEdge: DocumentIoType<CurvedEdge> = new DocumentType<CurvedEdge>({
  properties: {
    type: {
      type: new LiteralType({
        type: $ShapeRecordType,
        value: ShapeRecordType.CurvedEdge as ShapeRecordType.CurvedEdge,
      }),
    },
    controlDelta: {type: $Vector2D},
    anchorDelta: {type: $Vector2D},
  },
  changeCase: CaseStyle.SnakeCase,
});
