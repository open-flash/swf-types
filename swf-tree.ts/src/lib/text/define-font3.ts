import {
  ArrayType,
  BooleanType,
  CaseStyle,
  DocumentType,
  Int32Type,
  LiteralType,
  Ucs2StringType,
} from "kryo";
import {Uint16, Uint32} from "semantic-types";
import {LanguageCode} from "../language-code";
import {SimpleShape} from "../shapes/simple-shape";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {FontLayout} from "./font-layout";

export interface DefineFont3 extends _Tag {
  type: TagType.DefineFont3;
  id: Uint16;
  fontName: string;
  isSmall: boolean;
  isShiftJis: boolean;
  isAnsi: boolean;
  isItalic: boolean;
  isBold: boolean;
  language: LanguageCode;
  offsets: Uint32[];
  glyphs: SimpleShape[];
  layout?: FontLayout;
}

export namespace DefineFont3 {
  export interface Json {
    type: "define-font3";
    id: number;
    font_name: string;
    is_small: boolean;
    is_shift_jis: boolean;
    is_ansi: boolean;
    is_italic: boolean;
    is_bold: boolean;
    language: LanguageCode.Json;
    offsets: number[];
    glyphs: SimpleShape[];
    layout?: FontLayout.Json;
  }

  export const type: DocumentType<DefineFont3> = new DocumentType<DefineFont3>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFont3})},
      id: {type: new Int32Type()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      isSmall: {type: new BooleanType()},
      isShiftJis: {type: new BooleanType()},
      isAnsi: {type: new BooleanType()},
      isItalic: {type: new BooleanType()},
      isBold: {type: new BooleanType()},
      language: {type: LanguageCode.type},
      offsets: {type: new ArrayType({itemType: new Int32Type(), maxLength: Infinity})},
      glyphs: {type: new ArrayType({itemType: SimpleShape.type, maxLength: Infinity})},
      layout: {type: new Int32Type(), optional: true},
      fontDescent: {type: FontLayout.type, optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
