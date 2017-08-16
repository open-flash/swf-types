import {ArrayType, CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Uint16, Uint32} from "semantic-types";
import {Glyph} from "../glyph";
import {MorphFillStyle} from "../morph-fill-style";
import {Rect} from "../rect";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {MorphLineStyle} from "./morph-line-style";

export interface DefineMorphShape extends _Tag {
  type: TagType.DefineMorphShape;
  characterId: Uint16;
  startBounds: Rect;
  endBounds: Rect;
  offset: Uint32;
  morphFillStyles: MorphFillStyle[];
  morphLineStyles: MorphLineStyle[];
  startEdges: Glyph;
  endEdges: Glyph;
}

export namespace DefineMorphShape {
  export interface Json {
    type: "define-morph-shape";
    character_id: number;
    start_bounds: Rect.Json;
    end_bounds: Rect.Json;
    offset: number;
    morph_fill_styles: MorphFillStyle[];
    morph_line_styles: MorphLineStyle[];
    start_edges: Glyph.Json;
    end_edges: Glyph.Json;
  }

  export const type: DocumentType<DefineMorphShape> = new DocumentType<DefineMorphShape>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineMorphShape})},
      characterId: {type: new IntegerType()},
      startBounds: {type: Rect.type},
      endBounds: {type: Rect.type},
      offset: {type: new IntegerType()},
      morphFilleStyles: {type: new ArrayType({itemType: MorphFillStyle.type, maxLength: Infinity})},
      morphLineStyles: {type: new ArrayType({itemType: MorphLineStyle.type, maxLength: Infinity})},
      startEdges: {type: Glyph.type},
      endEdges: {type: Glyph.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
