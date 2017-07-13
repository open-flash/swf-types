import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Sint16, Uint16, Uint32} from "semantic-types";
import {LanguageCode} from "../basic-types/language-code";
import {Rect} from "../basic-types/rect";
import {SimpleShape} from "../shapes/simple-shape";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {KerningRecord} from "./kerning-record";

export interface DefineFont3 extends _Tag {
  type: TagType.DefineFont3;
  fontId: Uint16;
  fontName: string;
  isSmall: boolean;
  isShiftJis: boolean;
  isAnsi: boolean;
  isItalic: boolean;
  isBold: boolean;
  languageCode: LanguageCode;
  offsetTable: Uint32[];
  glyphShapeTable: SimpleShape[];
  fontAscent?: Uint16;
  fontDescent?: Uint16;
  fontLeading?: Sint16;
  fontAdvanceTable?: Sint16[];
  fontBoundsTable?: Rect[];
  fontKerningTable?: KerningRecord[];
}

export namespace DefineFont3 {
  export interface Json {
    type: "define-font3";
    font_id: number;
    font_name: string;
    is_small: boolean;
    is_shift_jis: boolean;
    is_ansi: boolean;
    is_italic: boolean;
    is_bold: boolean;
    language_code: LanguageCode.Json;
    offset_table: number[];
    glyph_shape_table: SimpleShape[];
    font_ascent?: number;
    font_descent?: number;
    font_leading?: number;
    font_advanceTable?: number[];
    font_bounds_table?: Rect.Json[];
    font_kerning_table?: KerningRecord.Json[];
  }

  export const type: DocumentType<DefineFont3> = new DocumentType<DefineFont3>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFont3})},
      fontId: {type: new Int32Type()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      isSmall: {type: new BooleanType()},
      isShiftJis: {type: new BooleanType()},
      isAnsi: {type: new BooleanType()},
      isItalic: {type: new BooleanType()},
      isBold: {type: new BooleanType()},
      languageCode: {type: LanguageCode.type},
      offsetTable: {type: new ArrayType({itemType: new Int32Type(), maxLength: Infinity})},
      glyphShapeTable: {type: new ArrayType({itemType: SimpleShape.type, maxLength: Infinity})},
      fontAscent: {type: new Int32Type(), optional: true},
      fontDescent: {type: new Int32Type(), optional: true},
      fontLeading: {type: new Int32Type(), optional: true},
      fontAdanceTable: {type: new ArrayType({itemType: new Int32Type(), maxLength: Infinity})},
      fontBoundsTable: {type: new ArrayType({itemType: Rect.type, maxLength: Infinity})},
      fontKerningTable: {type: new ArrayType({itemType: KerningRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
