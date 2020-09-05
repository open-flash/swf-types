import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface Protect extends _Tag {
  readonly type: TagType.Protect;
  readonly password: string;
}

export const $Protect: RecordIoType<Protect> = new RecordType<Protect>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Protect as TagType.Protect})},
    password: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
