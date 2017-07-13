import {BufferType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface Telemetry extends _Tag {
  type: TagType.Telemetry;
  password?: Uint8Array;
}

export namespace Telemetry {
  export interface Json {
    type: "telemetry";
    password?: string;
  }

  export const type: DocumentType<Telemetry> = new DocumentType<Telemetry>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.Telemetry})},
      password: {type: new BufferType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
