import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface ShowFrame extends _Tag {
  readonly type: TagType.ShowFrame;
}

export const $ShowFrame: RecordIoType<ShowFrame> = new RecordType<ShowFrame>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.ShowFrame as TagType.ShowFrame})},
  },
  changeCase: CaseStyle.SnakeCase,
});
