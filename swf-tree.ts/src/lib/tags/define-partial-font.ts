import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $Glyph, Glyph } from "../glyph";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefinePartialFont extends _Tag {
  type: TagType.DefinePartialFont;
  id: Uint16;
  glyphs: Glyph[];
}

export const $DefinePartialFont: DocumentIoType<DefinePartialFont> = new DocumentType<DefinePartialFont>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefinePartialFont as TagType.DefinePartialFont})},
    id: {type: $Uint16},
    glyphs: {type: new ArrayType({itemType: $Glyph, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
