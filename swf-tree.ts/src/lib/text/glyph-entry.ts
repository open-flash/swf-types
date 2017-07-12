import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint32} from "semantic-types";
import {Int32} from "../avm1/values/int32";

export interface GlyphEntry {
  glyphIndex: Uint32;
  glyphAdvance: Int32;
}

export namespace GlyphEntry {
  export interface Json {
    glyph_entry: number;
    glyph_advance: number;
  }

  export const type: DocumentType<GlyphEntry> = new DocumentType<GlyphEntry>({
    properties: {
      glyphIndex: {type: new Int32Type()},
      glyphAdvance: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
