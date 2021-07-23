import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface Metadata extends _Tag {
  readonly type: TagType.Metadata;
  readonly metadata: string;
}

export const $Metadata: RecordIoType<Metadata> = new RecordType<Metadata>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Metadata as TagType.Metadata})},
    metadata: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
