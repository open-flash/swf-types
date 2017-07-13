import {CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface DefineFontName extends _Tag {
  type: TagType.DefineFontName;
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
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFontName})},
      fontId: {type: new Int32Type()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      fontCopyright: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
