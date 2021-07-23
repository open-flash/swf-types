import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

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
