import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface DoInitAction extends _Tag {
  readonly type: TagType.DoInitAction;
  readonly spriteId: Uint16;
  readonly actions: Uint8Array;
}

export const $DoInitAction: RecordIoType<DoInitAction> = new RecordType<DoInitAction>(() => ({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DoInitAction as TagType.DoInitAction})},
    spriteId: {type: $Uint16},
    actions: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
}));
