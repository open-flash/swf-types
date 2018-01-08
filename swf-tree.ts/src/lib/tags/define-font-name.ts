import { CaseStyle, DocumentType, IntegerType, LiteralType, Ucs2StringType } from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineFontName extends _Tag {
  type: TagType.DefineFontName;
  fontId: Uint16;
  name: string;
  copyright: string;
}

export namespace DefineFontName {
  export interface Json {
    type: "define-font-name";
    font_id: number;
    name: string;
    copyright: string;
  }

  export const type: DocumentType<DefineFontName> = new DocumentType<DefineFontName>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFontName})},
      fontId: {type: new IntegerType()},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
      copyright: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
