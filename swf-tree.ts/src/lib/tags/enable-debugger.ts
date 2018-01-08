import { CaseStyle, DocumentType, LiteralType, Ucs2StringType } from "kryo";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface EnableDebugger extends _Tag {
  type: TagType.EnableDebugger;
  password: string;
}

export namespace EnableDebugger {
  export interface Json {
    type: "enable-debugger";
    password: string;
  }

  export const type: DocumentType<EnableDebugger> = new DocumentType<EnableDebugger>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.EnableDebugger})},
      password: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
