import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface EnableDebugger extends SwfTagBase {
  type: SwfTagType.EnableDebugger;
  password: string;
}

export namespace EnableDebugger {
  export interface Json {
    type: "enable-debugger";
    password: string;
  }

  export const type: DocumentType<EnableDebugger> = new DocumentType<EnableDebugger>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.EnableDebugger})},
      password: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
