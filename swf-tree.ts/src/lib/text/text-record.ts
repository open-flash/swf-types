import {ArrayType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {StraightSRgba8} from "../straight-s-rgba8";
import {GlyphEntry} from "./glyph-entry";

export interface TextRecord {
  fontId?: Uint16;
  color?: StraightSRgba8;
  offsetX: Sint16;
  offsetY: Sint16;
  fontSize?: Uint16;
  entries: GlyphEntry[];
}

export namespace TextRecord {
  export interface Json {
    font_id?: number;
    color?: StraightSRgba8.Json;
    offset_x: number;
    offset_y: number;
    font_size?: number;
    entries: GlyphEntry.Json[];
  }

  export const type: DocumentType<TextRecord> = new DocumentType<TextRecord>({
    properties: {
      fontId: {type: new Int32Type(), optional: true},
      color: {type: StraightSRgba8.type, optional: true},
      offsetX: {type: new Int32Type(), optional: true},
      offsetY: {type: new Int32Type(), optional: true},
      fontSize: {type: new Int32Type(), optional: true},
      entries: {type: new ArrayType({itemType: GlyphEntry.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
