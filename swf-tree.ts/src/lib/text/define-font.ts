import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Shape} from "../shapes/shape";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineFont extends SwfTagBase {
  type: SwfTagType.DefineFont;
  fontId: Uint16;
  offsetTable: Uint16[];
  glyphShapeTable: Shape[];
}

export namespace DefineFont {
  export interface Json {
    type: "define-font";
    font_id: number;
    offset_table: number[];
    glyph_shape_table: Shape[];
  }

  export const type: DocumentType<DefineFont> = new DocumentType<DefineFont>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineFont})},
      fontId: {type: new Int32Type()},
      offsetTable: {type: new ArrayType({itemType: new Int32Type(), maxLength: Infinity})},
      glyphShapeTable: {type: new ArrayType({itemType: Shape.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
