import {ArrayType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {Rgba} from "../basic-types/rgba";
import {GlyphEntry} from "./glyph-entry";

export interface TextRecord {
  fontId?: Uint16;
  textColor?: Rgba;
  xOffset?: Sint16;
  yOffset?: Sint16;
  textHeight?: Uint16;
  glyphEntries: GlyphEntry[];
}

export namespace TextRecord {
  export interface Json {
    "font-id"?: number;
    "font-color"?: Rgba.Json;
    "x-offset": number;
    "y-offset": number;
    "text-height": number;
    "glyph-entries": GlyphEntry.Json[];
  }

  export const type: DocumentType<TextRecord> = new DocumentType<TextRecord>({
    properties: {
      fontId: {type: new Int32Type(), optional: true},
      textColor: {type: Rgba.type, optional: true},
      xOffset: {type: new Int32Type(), optional: true},
      yOffset: {type: new Int32Type(), optional: true},
      textHeight: {type: new Int32Type(), optional: true},
      glyphEntries: {type: new ArrayType({itemType: GlyphEntry.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
