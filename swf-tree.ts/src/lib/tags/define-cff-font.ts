import {
  BooleanType,
  BufferType,
  CaseStyle,
  DocumentType,
  IntegerType,
  LiteralType,
  Ucs2StringType,
} from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineCffFont extends _Tag {
  type: TagType.DefineCffFont;
  id: Uint16;
  fontName: string;
  isItalic: boolean;
  isBold: boolean;
  data?: Uint8Array;
}

export namespace DefineCffFont {
  export interface Json {
    type: "define-cff-font";
    id: number;
    font_name: string;
    is_italic: boolean;
    is_bold: boolean;
    data?: string;
  }

  export const type: DocumentType<DefineCffFont> = new DocumentType<DefineCffFont>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineCffFont})},
      id: {type: new IntegerType()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      isItalic: {type: new BooleanType()},
      isBold: {type: new BooleanType()},
      data: {type: new BufferType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
