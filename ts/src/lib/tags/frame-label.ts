import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/lib/boolean.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface FrameLabel extends _Tag {
  readonly type: TagType.FrameLabel;
  readonly name: string;
  readonly isAnchor: boolean;
}

export const $FrameLabel: RecordIoType<FrameLabel> = new RecordType<FrameLabel>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.FrameLabel as TagType.FrameLabel})},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
    isAnchor: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
