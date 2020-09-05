import { $Sint16 } from "kryo/lib/integer.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Sint16, Uint16 } from "semantic-types";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.js";
import { $GlyphEntry, GlyphEntry } from "./glyph-entry.js";

export interface TextRecord {
  fontId?: Uint16;
  color?: StraightSRgba8;
  offsetX: Sint16;
  offsetY: Sint16;
  fontSize?: Uint16;
  entries: GlyphEntry[];
}

export const $TextRecord: RecordIoType<TextRecord> = new RecordType<TextRecord>({
  properties: {
    fontId: {type: $Uint16, optional: true},
    color: {type: $StraightSRgba8, optional: true},
    offsetX: {type: $Sint16},
    offsetY: {type: $Sint16},
    fontSize: {type: $Uint16, optional: true},
    entries: {type: new ArrayType({itemType: $GlyphEntry, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
