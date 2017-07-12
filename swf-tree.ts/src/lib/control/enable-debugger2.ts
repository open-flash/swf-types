import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface EnableDebugger2 extends SwfTagBase {
  type: SwfTagType.EnableDebugger2;
  password: string;
}

export namespace EnableDebugger2 {
  export interface Json {
    type: "enable-debugger";
    password: string;
  }

  export const type: DocumentType<EnableDebugger2> = new DocumentType<EnableDebugger2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.EnableDebugger2})},
      password: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
