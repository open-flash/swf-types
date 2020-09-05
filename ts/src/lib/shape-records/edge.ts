import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { $Vector2D, Vector2D } from "../vector-2d.js";
import { $ShapeRecordType, ShapeRecordType } from "./_type.js";

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

export const $Edge: RecordIoType<Edge> = new RecordType<Edge>({
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
