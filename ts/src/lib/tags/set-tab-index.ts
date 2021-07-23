import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface SetTabIndex extends _Tag {
  type: TagType.SetTabIndex;
  depth: Uint16;
  index: Uint16;
}

export const $SetTabIndex: RecordIoType<SetTabIndex> = new RecordType<SetTabIndex>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SetTabIndex as TagType.SetTabIndex})},
    depth: {type: $Uint16},
    index: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
