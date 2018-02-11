import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface Telemetry extends _Tag {
  type: TagType.Telemetry;
  password?: Uint8Array;
}

export const $Telemetry: DocumentIoType<Telemetry> = new DocumentType<Telemetry>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Telemetry as TagType.Telemetry})},
    password: {type: new BufferType({maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
