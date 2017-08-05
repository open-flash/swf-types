import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16, Uint32} from "semantic-types";
import {Glyph} from "../glyph";
import {MorphFillStyle} from "../morph-fill-style";
import {Rect} from "../rect";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {MorphLineStyle} from "./morph-line-style";

export interface DefineMorphShape2 extends _Tag {
  type: TagType.DefineMorphShape2;
  characterId: Uint16;
  startBounds: Rect;
  endBounds: Rect;
  startEdgeBounds: Rect;
  endEdgeBounds: Rect;
  usesNonScalingStrokes: boolean;
  usesScalingStrokes: boolean;
  offset: Uint32;
  morphFillStyles: MorphFillStyle[];
  morphLineStyles: MorphLineStyle[];
  startEdges: Glyph;
  endEdges: Glyph;
}

export namespace DefineMorphShape2 {
  export interface Json {
    type: "define-morph-shape2";
    character_id: number;
    start_bounds: Rect.Json;
    end_bounds: Rect.Json;
    uses_non_scaling_strokes: boolean;
    uses_scaling_strokes: boolean;
    offset: number;
    morph_fill_styles: MorphFillStyle[];
    morph_line_styles: MorphLineStyle[];
    start_edges: Glyph.Json;
    end_edges: Glyph.Json;
  }

  export const type: DocumentType<DefineMorphShape2> = new DocumentType<DefineMorphShape2>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineMorphShape2})},
      characterId: {type: new Int32Type()},
      startBounds: {type: Rect.type},
      endBounds: {type: Rect.type},
      usesNonScalingStrokes: {type: new BooleanType()},
      usesScalingStrokes: {type: new BooleanType()},
      offset: {type: new Int32Type()},
      morphFilleStyles: {type: new ArrayType({itemType: MorphFillStyle.type, maxLength: Infinity})},
      morphLineStyles: {type: new ArrayType({itemType: MorphLineStyle.type, maxLength: Infinity})},
      startEdges: {type: Glyph.type},
      endEdges: {type: Glyph.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
