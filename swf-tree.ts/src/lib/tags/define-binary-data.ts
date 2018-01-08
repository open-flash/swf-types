import { BufferType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineBinaryData extends _Tag {
  type: TagType.DefineBinaryData;
  id: Uint16;
  data: Uint8Array;
}

export namespace DefineBinaryData {
  export interface Json {
    type: "define-binary-data";
    id: number;
    data: string;
  }

  export const type: DocumentType<DefineBinaryData> = new DocumentType<DefineBinaryData>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineBinaryData})},
      id: {type: new IntegerType()},
      data: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
