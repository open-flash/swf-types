import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface Telemetry extends _Tag {
  readonly type: TagType.Telemetry;
  readonly password?: Uint8Array;
}

export const $Telemetry: RecordIoType<Telemetry> = new RecordType<Telemetry>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Telemetry as TagType.Telemetry})},
    password: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
