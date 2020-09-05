import { CaseStyle } from "kryo";
import { $Sint32, $Uint32 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Sint32, Uint32 } from "semantic-types";

export interface GlyphEntry {
  index: Uint32;
  advance: Sint32;
}

export const $GlyphEntry: RecordIoType<GlyphEntry> = new RecordType<GlyphEntry>({
  properties: {
    index: {type: $Uint32},
    advance: {type: $Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
