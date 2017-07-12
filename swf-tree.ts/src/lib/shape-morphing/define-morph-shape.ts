import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16, Uint32} from "semantic-types";
import {Rect} from "../basic-types/rect";
import {Shape} from "../shapes/shape";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {MorphFillStyle} from "./morph-fill-style";
import {MorphLineStyle} from "./morph-line-style";

export interface DefineMorphShape extends SwfTagBase {
  type: SwfTagType.DefineMorphShape;
  characterId: Uint16;
  startBounds: Rect;
  endBounds: Rect;
  offset: Uint32;
  morphFillStyles: MorphFillStyle[];
  morphLineStyles: MorphLineStyle[];
  startEdges: Shape;
  endEdges: Shape;
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
    start_edges: Shape.Json;
    end_edges: Shape.Json;
  }

  export const type: DocumentType<DefineMorphShape> = new DocumentType<DefineMorphShape>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineMorphShape})},
      characterId: {type: new Int32Type()},
      startBounds: {type: Rect.type},
      endBounds: {type: Rect.type},
      offset: {type: new Int32Type()},
      morphFilleStyles: {type: new ArrayType({itemType: MorphFillStyle.type, maxLength: Infinity})},
      morphLineStyles: {type: new ArrayType({itemType: MorphLineStyle.type, maxLength: Infinity})},
      startEdges: {type: Shape.type},
      endEdges: {type: Shape.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
