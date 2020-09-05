import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { $Vector2D, Vector2D } from "../vector-2d.js";
import { $Edge, Edge } from "./edge.js";

export interface MorphEdge extends Edge {
  /**
   * Difference between the edge start and edge end in the end-state of the
   * morph shape.
   */
  morphDelta: Vector2D;

  /**
   * Difference between the edge start and quadratic bezier control point (if
   * any) in the end-state of the morph shape.
   */
  morphControlDelta?: Vector2D;
}

export const $MorphEdge: RecordIoType<MorphEdge> = new RecordType<MorphEdge>({
  properties: {
    type: $Edge.properties.type,
    delta: $Edge.properties.delta,
    morphDelta: {type: $Vector2D},
    controlDelta: $Edge.properties.controlDelta,
    morphControlDelta: {type: $Vector2D, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
