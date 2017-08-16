import {CaseStyle, DocumentType, IntegerType} from "kryo";
import {Sint32, Uint32} from "semantic-types";

export interface GlyphEntry {
  index: Uint32;
  advance: Sint32;
}

export namespace GlyphEntry {
  export interface Json {
    index: number;
    advance: number;
  }

  export const type: DocumentType<GlyphEntry> = new DocumentType<GlyphEntry>({
    properties: {
      index: {type: new IntegerType()},
      advance: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
