import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $Edge, Edge } from "./edge";

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

export const $MorphEdge: DocumentIoType<MorphEdge> = new DocumentType<MorphEdge>({
  properties: {
    type: $Edge.properties.type,
    delta: $Edge.properties.delta,
    morphDelta: {type: $Vector2D},
    controlDelta: $Edge.properties.controlDelta,
    morphControlDelta: {type: $Vector2D, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
