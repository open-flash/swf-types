import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { _Tag } from "../tags/_tag.js";
import { $TagType, TagType } from "../tags/_type.js";

export interface Protect extends _Tag {
  type: TagType.Protect;
}

export const $Protect: RecordIoType<Protect> = new RecordType<Protect>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Protect as TagType.Protect})},
  },
  changeCase: CaseStyle.SnakeCase,
});
