import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";

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
