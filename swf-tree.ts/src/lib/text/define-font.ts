import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {SimpleShape} from "../shapes/simple-shape";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface DefineFont extends _Tag {
  type: TagType.DefineFont;
  fontId: Uint16;
  offsetTable: Uint16[];
  glyphShapeTable: SimpleShape[];
}

export namespace DefineFont {
  export interface Json {
    type: "define-font";
    font_id: number;
    offset_table: number[];
    glyph_shape_table: SimpleShape[];
  }

  export const type: DocumentType<DefineFont> = new DocumentType<DefineFont>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFont})},
      fontId: {type: new Int32Type()},
      offsetTable: {type: new ArrayType({itemType: new Int32Type(), maxLength: Infinity})},
      glyphShapeTable: {type: new ArrayType({itemType: SimpleShape.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
