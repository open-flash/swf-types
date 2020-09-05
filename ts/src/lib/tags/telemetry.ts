import { $Bytes } from "kryo/lib/bytes.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
