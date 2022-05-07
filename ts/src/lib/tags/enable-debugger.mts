import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface EnableDebugger extends _Tag {
  readonly type: TagType.EnableDebugger;
  readonly password: string;
}

export const $EnableDebugger: RecordIoType<EnableDebugger> = new RecordType<EnableDebugger>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.EnableDebugger as TagType.EnableDebugger})},
    password: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
