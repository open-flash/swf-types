import { BufferType, CaseStyle, DocumentType, LiteralType } from "kryo";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface JpegTables extends _Tag {
  type: TagType.JpegTables;
  data: Uint8Array;
}

export namespace JpegTables {
  export interface Json {
    type: "jpeg-tables";
    data: string;
  }

  export const type: DocumentType<JpegTables> = new DocumentType<JpegTables>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.JpegTables})},
      data: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
