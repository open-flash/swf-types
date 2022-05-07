import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { _Tag } from "../tags/_tag.mjs";
import { $TagType, TagType } from "../tags/_type.mjs";

export interface Protect extends _Tag {
  type: TagType.Protect;
}

export const $Protect: RecordIoType<Protect> = new RecordType<Protect>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Protect as TagType.Protect})},
  },
  changeCase: CaseStyle.SnakeCase,
});
