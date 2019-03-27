import { $Sint16 } from "kryo/builtins/sint16";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16, Uint16 } from "semantic-types";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8";
import { $GlyphEntry, GlyphEntry } from "./glyph-entry";

export interface TextRecord {
  fontId?: Uint16;
  color?: StraightSRgba8;
  offsetX: Sint16;
  offsetY: Sint16;
  fontSize?: Uint16;
  entries: GlyphEntry[];
}

export const $TextRecord: DocumentIoType<TextRecord> = new DocumentType<TextRecord>({
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
