import { BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { Rect } from "../rect";
import { Shape } from "../shape";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineShape extends _Tag {
  type: TagType.DefineShape;
  id: Uint16;
  bounds: Rect;
  edgeBounds?: Rect;
  hasFillWinding: boolean;
  hasNonScalingStrokes: boolean;
  hasScalingStrokes: boolean;
  shape: Shape;
}

export namespace DefineShape {
  export interface Json {
    type: "define-shape";
    id: number;
    bounds: Rect.Json;
    edge_bounds?: Rect.Json;
    has_fill_winding: boolean;
    has_non_scaling_strokes: boolean;
    has_scaling_strokes: boolean;
    shape: Shape.Json;
  }

  export const type: DocumentType<DefineShape> = new DocumentType<DefineShape>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineShape})},
      id: {type: new IntegerType()},
      bounds: {type: Rect.type},
      edgeBounds: {type: Rect.type, optional: true},
      hasFillWinding: {type: new BooleanType()},
      hasNonScalingStrokes: {type: new BooleanType()},
      hasScalingStrokes: {type: new BooleanType()},
      shape: {type: Shape.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
