import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface Telemetry extends _Tag {
  readonly type: TagType.Telemetry;
  readonly password?: Uint8Array;
}

export const $Telemetry: DocumentIoType<Telemetry> = new DocumentType<Telemetry>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Telemetry as TagType.Telemetry})},
    password: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
