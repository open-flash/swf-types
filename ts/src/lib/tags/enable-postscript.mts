import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface EnablePostscript extends _Tag {
  readonly type: TagType.EnablePostscript;
}

export const $EnablePostscript: RecordIoType<EnablePostscript> = new RecordType<EnablePostscript>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.EnablePostscript as TagType.EnablePostscript})},
  },
  changeCase: CaseStyle.SnakeCase,
});
