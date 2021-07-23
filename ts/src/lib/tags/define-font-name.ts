import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
import { Uint16 } from "semantic-types";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineFontName extends _Tag {
  readonly type: TagType.DefineFontName;
  readonly fontId: Uint16;
  readonly name: string;
  readonly copyright: string;
}

export const $DefineFontName: RecordIoType<DefineFontName> = new RecordType<DefineFontName>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineFontName as TagType.DefineFontName})},
    fontId: {type: $Uint16},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
    copyright: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
