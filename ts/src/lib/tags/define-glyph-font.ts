import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $Glyph, Glyph } from "../glyph.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineGlyphFont extends _Tag {
  readonly type: TagType.DefineGlyphFont;
  readonly id: Uint16;
  readonly glyphs: ReadonlyArray<Glyph>;
}

export const $DefineGlyphFont: RecordIoType<DefineGlyphFont> = new RecordType<DefineGlyphFont>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineGlyphFont as TagType.DefineGlyphFont})},
    id: {type: $Uint16},
    glyphs: {type: new ArrayType({itemType: $Glyph, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
