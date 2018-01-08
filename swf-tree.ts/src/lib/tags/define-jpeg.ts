import { BufferType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineJpeg extends _Tag {
  type: TagType.DefineJpeg;
  id: Uint16;
  image: Uint8Array;
  alpha?: Uint8Array;
  deblocking?: Uint16;
}

export namespace DefineJpeg {
  export interface Json {
    type: "define-jpeg";
    id: number;
    image: string;
    alpha?: string;
    deblocking?: number;
  }

  export const type: DocumentType<DefineJpeg> = new DocumentType<DefineJpeg>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineJpeg})},
      id: {type: new IntegerType()},
      image: {type: new BufferType({maxLength: Infinity})},
      alpha: {type: new BufferType({maxLength: Infinity}), optional: true},
      deblocking: {type: new IntegerType(), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
