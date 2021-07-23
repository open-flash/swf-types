import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $SRgb8, SRgb8 } from "../s-rgb8.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface SetBackgroundColor extends _Tag {
  readonly type: TagType.SetBackgroundColor;
  readonly color: SRgb8;
}

export const $SetBackgroundColor: RecordIoType<SetBackgroundColor> = new RecordType<SetBackgroundColor>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SetBackgroundColor as TagType.SetBackgroundColor})},
    color: {type: $SRgb8},
  },
  changeCase: CaseStyle.SnakeCase,
});
