import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Glyph} from "../glyph";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface DefinePartialFont extends _Tag {
  type: TagType.DefinePartialFont;
  id: Uint16;
  glyphs: Glyph[];
}

export namespace DefinePartialFont {
  export interface Json {
    type: "define-partial-font";
    id: number;
    glyphs: Glyph[];
  }

  export const type: DocumentType<DefinePartialFont> = new DocumentType<DefinePartialFont>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefinePartialFont})},
      id: {type: new Int32Type()},
      glyphs: {type: new ArrayType({itemType: Glyph.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
