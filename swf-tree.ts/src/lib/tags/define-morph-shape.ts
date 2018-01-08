import { BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { MorphShape } from "../morph-shape";
import { Rect } from "../rect";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineMorphShape extends _Tag {
  type: TagType.DefineMorphShape;
  id: Uint16;
  startBounds: Rect;
  endBounds: Rect;
  // TODO: Combine edgeBounds with something like MorphRect
  startEdgeBounds?: Rect;
  endEdgeBounds?: Rect;
  hasNonScalingStrokes: boolean;
  hasScalingStrokes: boolean;
  shape: MorphShape;
}

export namespace DefineMorphShape {
  export interface Json {
    type: "define-morph-shape";
    id: number;
    start_bounds: Rect.Json;
    end_bounds: Rect.Json;
    start_edge_bounds?: Rect.Json;
    end_edge_bounds?: Rect.Json;
    has_non_scaling_strokes: boolean;
    has_scaling_strokes: boolean;
    shape: MorphShape.Json;
  }

  export const type: DocumentType<DefineMorphShape> = new DocumentType<DefineMorphShape>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineMorphShape})},
      id: {type: new IntegerType()},
      startBounds: {type: Rect.type},
      endBounds: {type: Rect.type},
      startEdgeBounds: {type: Rect.type, optional: true},
      endEdgeBounds: {type: Rect.type, optional: true},
      hasFillWinding: {type: new BooleanType()},
      hasNonScalingStrokes: {type: new BooleanType()},
      shape: {type: MorphShape.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
