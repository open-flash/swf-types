import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DoAction extends _Tag {
  readonly type: TagType.DoAction;
  readonly actions: Uint8Array;
}

export const $DoAction: RecordIoType<DoAction> = new RecordType<DoAction>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DoAction as TagType.DoAction})},
    actions: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
