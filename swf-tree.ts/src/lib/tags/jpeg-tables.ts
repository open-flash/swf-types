import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface JpegTables extends _Tag {
  type: TagType.JpegTables;
  data: Uint8Array;
}

export const $JpegTables: DocumentIoType<JpegTables> = new DocumentType<JpegTables>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.JpegTables as TagType.JpegTables})},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
