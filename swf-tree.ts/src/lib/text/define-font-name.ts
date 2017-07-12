import {CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineFontName extends SwfTagBase {
  type: SwfTagType.DefineFontName;
  fontId: Uint16;
  fontName: string;
  fontCopyright: string;
}

export namespace DefineFontName {
  export interface Json {
    type: "define-font2";
    font_id: number;
    font_name: string;
    font_copyright: string;
  }

  export const type: DocumentType<DefineFontName> = new DocumentType<DefineFontName>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineFontName})},
      fontId: {type: new Int32Type()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      fontCopyright: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
