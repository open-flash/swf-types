import { $Bytes } from "kryo/lib/bytes.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

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
