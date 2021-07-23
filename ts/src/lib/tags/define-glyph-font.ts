import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
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
