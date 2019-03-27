import { $Sint32 } from "kryo/builtins/sint32";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint32, Uint32 } from "semantic-types";

export interface GlyphEntry {
  index: Uint32;
  advance: Sint32;
}

export const $GlyphEntry: DocumentIoType<GlyphEntry> = new DocumentType<GlyphEntry>({
  properties: {
    index: {type: $Uint32},
    advance: {type: $Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
