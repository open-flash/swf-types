import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {FontData} from "./font-data";

export interface DefineFont4 extends SwfTagBase {
  type: SwfTagType.DefineFont4;
  fontId: Uint16;
  fontName: string;
  isItalic: boolean;
  isBold: boolean;
  fontData?: FontData;
}

export namespace DefineFont4 {
  export interface Json {
    type: "define-font4";
    "font-id": number;
    "font-name": string;
    "is-italic": boolean;
    "is-bold": boolean;
    "font-data"?: FontData.Json;
  }

  export const type: DocumentType<DefineFont4> = new DocumentType<DefineFont4>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineFont4})},
      fontId: {type: new Int32Type()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      isItalic: {type: new BooleanType()},
      isBold: {type: new BooleanType()},
      fontData: {type: FontData.type, optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
