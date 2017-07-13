import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface EnableDebugger2 extends _Tag {
  type: TagType.EnableDebugger2;
  password: string;
}

export namespace EnableDebugger2 {
  export interface Json {
    type: "enable-debugger";
    password: string;
  }

  export const type: DocumentType<EnableDebugger2> = new DocumentType<EnableDebugger2>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.EnableDebugger2})},
      password: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
