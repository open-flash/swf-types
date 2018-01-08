import { BufferType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface Unknown extends _Tag {
  type: TagType.Unknown;
  code: Uint16;
  data: Uint8Array;
}

export namespace Unknown {
  export interface Json {
    type: "unknown";
    code: number;
    data: string;
  }

  export const type: DocumentType<Unknown> = new DocumentType<Unknown>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.Unknown})},
      code: {type: new IntegerType()},
      data: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
