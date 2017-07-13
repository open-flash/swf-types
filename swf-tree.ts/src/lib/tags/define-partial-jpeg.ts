import {BufferType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface DefinePartialJpeg extends _Tag {
  type: TagType.DefinePartialJpeg;
  id: Uint16;
  data: Uint8Array;
}

export namespace DefinePartialJpeg {
  export interface Json {
    type: "define-partial-jpeg";
    id: number;
    data: string;
  }

  export const type: DocumentType<DefinePartialJpeg> = new DocumentType<DefinePartialJpeg>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefinePartialJpeg})},
      id: {type: new Int32Type()},
      data: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
