import {ArrayType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {GlyphEntry} from "./glyph-entry";

export interface TextRecord {
  fontId?: Uint16;
  textColor?: StraightSRgba;
  xOffset?: Sint16;
  yOffset?: Sint16;
  textHeight?: Uint16;
  glyphEntries: GlyphEntry[];
}

export namespace TextRecord {
  export interface Json {
    font_id?: number;
    font_color?: StraightSRgba.Json;
    x_offset: number;
    y_offset: number;
    text_height: number;
    glyph_entries: GlyphEntry.Json[];
  }

  export const type: DocumentType<TextRecord> = new DocumentType<TextRecord>({
    properties: {
      fontId: {type: new Int32Type(), optional: true},
      textColor: {type: StraightSRgba.type, optional: true},
      xOffset: {type: new Int32Type(), optional: true},
      yOffset: {type: new Int32Type(), optional: true},
      textHeight: {type: new Int32Type(), optional: true},
      glyphEntries: {type: new ArrayType({itemType: GlyphEntry.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
