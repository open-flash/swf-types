import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineFontName extends _Tag {
  type: TagType.DefineFontName;
  fontId: Uint16;
  name: string;
  copyright: string;
}

export const $DefineFontName: DocumentIoType<DefineFontName> = new DocumentType<DefineFontName>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineFontName as TagType.DefineFontName})},
    fontId: {type: $Uint16},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
    copyright: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
