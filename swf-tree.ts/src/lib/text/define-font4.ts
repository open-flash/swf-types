import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {FontData} from "./font-data";

export interface DefineFont4 extends _Tag {
  type: TagType.DefineFont4;
  fontId: Uint16;
  fontName: string;
  isItalic: boolean;
  isBold: boolean;
  fontData?: FontData;
}

export namespace DefineFont4 {
  export interface Json {
    type: "define-font4";
    font_id: number;
    font_name: string;
    is_italic: boolean;
    is_bold: boolean;
    font_data?: FontData.Json;
  }

  export const type: DocumentType<DefineFont4> = new DocumentType<DefineFont4>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFont4})},
      fontId: {type: new Int32Type()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      isItalic: {type: new BooleanType()},
      isBold: {type: new BooleanType()},
      fontData: {type: FontData.type, optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
