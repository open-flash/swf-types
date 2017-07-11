import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineFontInfo extends SwfTagBase {
  type: SwfTagType.DefineFontInfo;
  fontId: Uint16;
  fontName: string;
  isSmall: boolean;
  isShiftJis: boolean;
  isAnsi: boolean;
  isItalic: boolean;
  isBold: boolean;
  codeTable: Uint16[];
}

export namespace DefineFontInfo {
  export interface Json {
    type: "define-font-info";
    "font-id": number;
    "font-name": string;
    "is-small": boolean;
    "is-shift-jis": boolean;
    "is-ansi": boolean;
    "is-italic": boolean;
    "is-bold": boolean;
    "code-table": number[];
  }

  export const type: DocumentType<DefineFontInfo> = new DocumentType<DefineFontInfo>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineFontInfo})},
      fontId: {type: new Int32Type()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      isSmall: {type: new BooleanType()},
      isShiftJis: {type: new BooleanType()},
      isAnsi: {type: new BooleanType()},
      isItalic: {type: new BooleanType()},
      isBold: {type: new BooleanType()},
      codeTable: {type: new ArrayType({itemType: new Int32Type(), maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
