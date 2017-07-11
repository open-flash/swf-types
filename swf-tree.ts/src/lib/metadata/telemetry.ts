import {BufferType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface Telemetry extends SwfTagBase {
  type: SwfTagType.Telemetry;
  passwordHash?: Uint8Array;
}

export namespace Telemetry {
  export interface Json {
    type: "enable-telemetry";
    "password-hash"?: string;
  }

  export const type: DocumentType<Telemetry> = new DocumentType<Telemetry>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.EnableTelemetry})},
      passwordHash: {type: new BufferType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
