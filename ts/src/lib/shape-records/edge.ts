import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $ShapeRecordType, ShapeRecordType } from "./_type";

export interface Edge {
  type: ShapeRecordType.Edge;

  /**
   * Difference between the edge start and edge end.
   */
  delta: Vector2D;

  /**
   * Difference between the edge start and quadratic bezier control point (if
   * any).
   */
  controlDelta?: Vector2D;
}

export const $Edge: DocumentIoType<Edge> = new DocumentType<Edge>({
  properties: {
    type: {
      type: new LiteralType({
        type: $ShapeRecordType,
        value: ShapeRecordType.Edge as ShapeRecordType.Edge,
      }),
    },
    delta: {type: $Vector2D},
    controlDelta: {type: $Vector2D, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
