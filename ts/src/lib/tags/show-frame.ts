import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
